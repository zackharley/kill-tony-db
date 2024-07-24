'use client';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  createFilterOptions,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';
import { AppearanceType, Location, Person } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const TONY_HINCHLIFFE_PERSON_ID = 3;
const BRIAN_REDBAN_PERSON_ID = 2;
const WILLIAM_MONTGOMERY_PERSON_ID = 258;
const KAM_PATTERSON_PERSON_ID = 369;
const HANS_KIM_PERSON_ID = 319;
const PAUL_DEEMER_PERSON_ID = 356;
const D_MADNESS_PERSON_ID = 321;
const MICHAEL_A_GONZALES_PERSON_ID = 308;
const JON_DEAS_PERSON_ID = 367;
const MATTHEW_MUEHLING_PERSON_ID = 311;
const DEFAULT_APPEARANCES: AppearanceFormValues[] = [
  {
    _formId: uuidv4(),
    personId: HANS_KIM_PERSON_ID,
    type: AppearanceType.regular,
  },
  {
    _formId: uuidv4(),
    personId: KAM_PATTERSON_PERSON_ID,
    type: AppearanceType.regular,
  },
  {
    _formId: uuidv4(),
    personId: WILLIAM_MONTGOMERY_PERSON_ID,
    type: AppearanceType.regular,
  },
  {
    _formId: uuidv4(),
    personId: TONY_HINCHLIFFE_PERSON_ID,
    type: AppearanceType.host,
  },
  {
    _formId: uuidv4(),
    personId: BRIAN_REDBAN_PERSON_ID,
    type: AppearanceType.host,
  },
  {
    _formId: uuidv4(),
    personId: PAUL_DEEMER_PERSON_ID,
    type: AppearanceType.band,
  },
  {
    _formId: uuidv4(),
    personId: D_MADNESS_PERSON_ID,
    type: AppearanceType.band,
  },
  {
    _formId: uuidv4(),
    personId: MICHAEL_A_GONZALES_PERSON_ID,
    type: AppearanceType.band,
  },
  {
    _formId: uuidv4(),
    personId: JON_DEAS_PERSON_ID,
    type: AppearanceType.band,
  },
  {
    _formId: uuidv4(),
    personId: MATTHEW_MUEHLING_PERSON_ID,
    type: AppearanceType.band,
  },
];

const generateEmptyAppearance = (): AppearanceFormValues => ({
  _formId: uuidv4(),
});

export default function NewEpisodeForm({
  locations,
  people,
}: {
  locations: Location[];
  people: Person[];
}) {
  const defaultLocation = locations.find(
    (location) => location.name === 'Comedy Mothership',
  );
  const [airDate, setAirDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [appearances, setAppearances] = useState<AppearanceFormValues[]>([
    ...DEFAULT_APPEARANCES,
  ]);
  const [locationId, setLocationId] = useState<number | null>(
    defaultLocation?.id || null,
  );
  const [recordingDate, setRecordingDate] = useState<dayjs.Dayjs | null>(
    dayjs(),
  );
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const [title, setTitle] = useState('KT #');
  const [youTubeUrl, setYouTubeUrl] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      locationId,
      location: locations.find((location) => location.id === locationId),
      spotifyUrl,
      youTubeUrl,
      title,
      airDate: airDate?.toISOString(),
      recordingDate: recordingDate?.toISOString(),
      appearances,
    });
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h2" sx={{ mt: 3 }}>
        Episode data
      </Typography>
      <TextField
        label="Title"
        placeholder="KT #600"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <DatePicker
        label="Air date"
        disableFuture
        value={airDate}
        onChange={(value: dayjs.Dayjs | null) => setAirDate(value)}
      />
      <DatePicker
        label="Recording date"
        disableFuture
        value={recordingDate}
        onChange={(value: dayjs.Dayjs | null) => setRecordingDate(value)}
      />
      <TextField
        select
        label="Venue"
        value={locationId}
        onChange={(event) => setLocationId(Number(event.target.value))}
      >
        {locations.map((location) => (
          <MenuItem key={location.id} value={location.id}>
            {location.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Spotify URL"
        value={spotifyUrl}
        onChange={(event) => setSpotifyUrl(event.target.value)}
      />
      <TextField
        label="YouTube URL"
        value={youTubeUrl}
        onChange={(event) => setYouTubeUrl(event.target.value)}
      />
      <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
        Appearances
      </Typography>
      {appearances.map((appearance, index) => (
        <Fragment key={appearance._formId}>
          <Typography>Appearance {index + 1}</Typography>
          <AppearanceFormFields
            appearance={appearance}
            onChange={(updatedAppearance) =>
              setAppearances([
                ...appearances.slice(0, index),
                updatedAppearance,
                ...appearances.slice(index + 1),
              ])
            }
            people={people}
          />
          <Button
            variant="outlined"
            onClick={() =>
              setAppearances(appearances.filter((_, i) => i !== index))
            }
          >
            Remove appearance
          </Button>
        </Fragment>
      ))}
      <Button
        variant="outlined"
        onClick={() =>
          setAppearances([...appearances, generateEmptyAppearance()])
        }
        color="secondary"
      >
        Add appearance
      </Button>
      <Button variant="contained" type="submit" sx={{ mt: 3 }} color="success">
        Submit
      </Button>
    </Box>
  );
}

type AppearanceFormValues = {
  _formId: string;
  personId?: number;
  type?: AppearanceType;
  isStandupDebut?: boolean;
  youtubeTimestamp?: number;
};

const filter = createFilterOptions<Person>({
  stringify: (option) => option.name,
});

function AppearanceFormFields({
  appearance,
  onChange = () => {},
  people,
}: {
  appearance: AppearanceFormValues;
  onChange?: (appearance: AppearanceFormValues) => void;
  people: Person[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState({
    name: '',
    bio: '',
    isActiveRegular: false,
    isHallofFameMember: false,
    hasGoldenTicket: false,
    instagramUrl: '',
    tiktokUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
  });
  const handleClose = () => {
    setDialogValue({
      name: '',
      bio: '',
      isActiveRegular: false,
      isHallofFameMember: false,
      hasGoldenTicket: false,
      instagramUrl: '',
      tiktokUrl: '',
      twitterUrl: '',
      youtubeUrl: '',
    });
    setIsOpen(false);
  };
  const handleCreateNewPerson = () => {};
  const selectedPerson = people.find(
    (person) => person.id === appearance.personId,
  );
  return (
    <>
      <Autocomplete
        freeSolo
        clearOnBlur
        clearOnEscape
        value={selectedPerson}
        options={people}
        getOptionKey={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          return option.id;
        }}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              setIsOpen(true);
              setDialogValue({
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            setIsOpen(true);
            setDialogValue({
              name: newValue.inputValue,
            });
          } else {
            onChange({
              ...appearance,
              personId: (newValue as Person)?.id,
            });
          }
        }}
        renderInput={(params) => <TextField {...params} label="Person" />}
        renderOption={(props, option) => (
          <li key={option.id} {...props}>
            {(option as Person)?.name}
          </li>
        )}
      />
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={appearance.type}
          onChange={(event) =>
            onChange({
              ...appearance,
              type: event.target.value as AppearanceType,
            })
          }
        >
          <MenuItem value={AppearanceType.bucket_pull}>Bucket Pull</MenuItem>
          <MenuItem value={AppearanceType.guest}>Guest</MenuItem>
          <MenuItem value={AppearanceType.host}>Host</MenuItem>
          <MenuItem value={AppearanceType.regular}>Regular</MenuItem>
          <MenuItem value={AppearanceType.band}>Band</MenuItem>
        </Select>
      </FormControl>
      {(appearance.type === AppearanceType.bucket_pull ||
        appearance.type === AppearanceType.regular) && (
        <TextField
          label="YouTube timestamp"
          type="number"
          onChange={(event) =>
            onChange({
              ...appearance,
              youtubeTimestamp: Number(event.target.value),
            })
          }
        />
      )}
      {appearance.type === AppearanceType.bucket_pull && (
        <FormControlLabel
          control={
            <Checkbox
              value={appearance.isStandupDebut}
              onChange={(event) =>
                onChange({
                  ...appearance,
                  isStandupDebut: event.target.checked,
                })
              }
            />
          }
          label="Is standup debut?"
        />
      )}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleCreateNewPerson}>
          <DialogTitle>Add a new person</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="Name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
