-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "spotifyUrl" TEXT,
ALTER COLUMN "youtubeUrl" DROP NOT NULL,
ALTER COLUMN "airDate" DROP NOT NULL;
