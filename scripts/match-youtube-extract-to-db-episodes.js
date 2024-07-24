import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
import { isEqual } from 'lodash-es';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

const data = [
  {
    episodeTitle: 'KT #645- LOUIS KATZ',
    youtubeURL: 'https://www.youtube.com/watch?v=yigawhGWyys&t=2403s',
  },
  {
    episodeTitle: 'KT #644 - KIRK FOX',
    youtubeURL: 'https://www.youtube.com/watch?v=sOyQ8BM3aUk&t=509s',
  },
  {
    episodeTitle: 'KT #643 - THE REGULARS',
    youtubeURL: 'https://www.youtube.com/watch?v=oCs-xw_TF_I&t=200s',
  },
  {
    episodeTitle: 'KT#642 - ARI SHAFFIR + MARK NORMAND + SAM TALLENT',
    youtubeURL: 'https://www.youtube.com/watch?v=BWnWrv4MRXQ&t=5512s',
  },
  {
    episodeTitle: 'KT#641 - HOWIE MANDEL',
    youtubeURL: 'https://www.youtube.com/watch?v=tzrlUoEfgpc',
  },
  {
    episodeTitle: 'KT #640 - STAVROS HALKIAS',
    youtubeURL: 'https://www.youtube.com/watch?v=n3jzMMNJOXo',
  },
  {
    episodeTitle: 'KT #639 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=GIGu1OtWXF8&t=3729s',
  },
  {
    episodeTitle: 'KT #638 - GREG FITZSIMMONS + DAVE SMITH',
    youtubeURL: 'https://www.youtube.com/watch?v=_BJRMrToaYg&t=6267s',
  },
  {
    episodeTitle: 'KT #637 - STEVEO + ADRIENNE IAPALUCCI',
    youtubeURL: 'https://www.youtube.com/watch?v=lxcF06Kl3Wg',
  },
  {
    episodeTitle: 'KT #636 - RON WHITE + PAULY SHORE',
    youtubeURL: 'https://www.youtube.com/watch?v=4nuK3I2XN5A',
  },
  {
    episodeTitle: "KT #635 - DUNCAN TRUSSELL + LIL' HOBO",
    youtubeURL: 'https://www.youtube.com/watch?v=zNrz86H8tBc&t=1s',
  },
  {
    episodeTitle: 'KT #634 - RYAN SICKLER + YANNIS PAPPAS + MIKE FEENEY',
    youtubeURL: 'https://www.youtube.com/watch?v=vKn_mWrHH78',
  },
  {
    episodeTitle: 'KT#633 - KAM PATTERSON + DAVID JOLLY',
    youtubeURL: 'https://www.youtube.com/watch?v=xe7KN-iJXxs&t=6516s',
  },
  {
    episodeTitle: "KT #632 - SUGA SEAN O'MALLEY + JOE LIST",
    youtubeURL: 'https://www.youtube.com/watch?v=L-5_5FK6ylI',
  },
  {
    episodeTitle: 'KT #631 - KIM CONGDON + JAMAR NEIGHBOORS',
    youtubeURL: 'https://www.youtube.com/watch?v=xnLTKWiW60U',
  },
  {
    episodeTitle: 'KT #630 - DR. PHIL (ADAM RAY) + SAM TALLENT',
    youtubeURL: 'https://www.youtube.com/watch?v=llHz6Lago60',
  },
  {
    episodeTitle:
      'KT #629 - RIC FLAIR - SHANE GILLIS - ARI SHAFFIR - MARK NORMAND- LUIS J GOMEZ - ZAC AMICO',
    youtubeURL: 'https://www.youtube.com/watch?v=xrkG5H_fysU&t=3587s',
  },
  {
    episodeTitle: 'KT #628 - H. FOLEY + KEVIN RYAN',
    youtubeURL: 'https://www.youtube.com/watch?v=w84ZJwq-Pjk&t=4668s',
  },
  {
    episodeTitle: 'KT #627 - ROSEANNE + DAVID KOECHNER',
    youtubeURL: 'https://www.youtube.com/watch?v=7N9_lniq8No',
  },
  {
    episodeTitle: 'KT #626 - JOE DEROSA + DAVID LUCAS',
    youtubeURL: 'https://www.youtube.com/watch?v=mxmGeQnGqPo',
  },
  {
    episodeTitle: 'KT #625 - POST MALONE + JOE ROGAN + KURT METZGER',
    youtubeURL: 'https://www.youtube.com/watch?v=NmPPjcJi5E0&t=8s',
  },
  {
    episodeTitle: 'KT #624 - THAI RIVERA',
    youtubeURL: 'https://www.youtube.com/watch?v=BUbzVZi_k6E',
  },
  {
    episodeTitle: 'KT #623 - BRIAN MOSES + MATTHEW BROUSSARD',
    youtubeURL: 'https://www.youtube.com/watch?v=lCH8uYMMGjM&t=1s',
  },
  {
    episodeTitle: 'KT #622 - JIM NORTON',
    youtubeURL: 'https://www.youtube.com/watch?v=kY6tr-C96G4',
  },
  {
    episodeTitle: 'KT #621 - DON BARRIS',
    youtubeURL: 'https://www.youtube.com/watch?v=k3ZN07OlOS0&t=161s',
  },
  {
    episodeTitle: 'KT #620 - ADAM RAY + RICH VOS',
    youtubeURL: 'https://www.youtube.com/watch?v=EFrRRGJj_S4',
  },
  {
    episodeTitle: 'KT #619 - ARI SHAFFIR',
    youtubeURL: 'https://www.youtube.com/watch?v=av1kWX1mZaM',
  },
  {
    episodeTitle: 'KT #618 - TREVOR WALLACE + BRIAN SIMPSON',
    youtubeURL: 'https://www.youtube.com/watch?v=6hd4hpCuVkQ&t=3185s',
  },
  {
    episodeTitle: 'KT #617 - ALI SIDDIQ',
    youtubeURL: 'https://www.youtube.com/watch?v=sLdtEo6hoLM',
  },
  {
    episodeTitle: 'KT #616 - JOE ROGAN + TOM SEGURA - [10 YEAR ANNIVERSARY]',
    youtubeURL: 'https://www.youtube.com/watch?v=UzkQnHcXzvQ&t=3s',
  },
  {
    episodeTitle: 'KT #615 - THEO VON',
    youtubeURL: 'https://www.youtube.com/watch?v=wJqjNqIqkCg',
  },
  {
    episodeTitle: 'KILL TONY NEW YEARS EVE 2023! (ARENA)',
    youtubeURL: 'https://www.youtube.com/watch?v=vRfzMrzDsaw',
  },
  {
    episodeTitle: 'KT #614 - DAVE ATTELL + JEFF ROSS',
    youtubeURL: 'https://www.youtube.com/watch?v=0b6qJrEIlR0',
  },
  {
    episodeTitle: 'KILL TONY #613 - ELEANOR KERRIGAN',
    youtubeURL: 'https://www.youtube.com/watch?v=Akx6HOgW5fU',
  },
  {
    episodeTitle: 'KILL TONY #612 - DOUG STANHOPE',
    youtubeURL: 'https://www.youtube.com/watch?v=w0bpoi23l0I&t=4151s',
  },
  {
    episodeTitle: 'KILL TONY #611 - BRIAN HOLTZMAN + IAN EDWARDS',
    youtubeURL: 'https://www.youtube.com/watch?v=1ybALHSCbZU&t=1406s',
  },
  {
    episodeTitle: 'KILL TONY #610 - PAULY SHORE + ERIK GRIFFIN',
    youtubeURL: 'https://www.youtube.com/watch?v=2N-C7tQzy68&t=4134s',
  },
  {
    episodeTitle: 'KILL TONY #609 - IAN FIDANCE + JOY HINCHCLIFFE',
    youtubeURL: 'https://www.youtube.com/watch?v=jDPv0JafSg4&t=1519s',
  },
  {
    episodeTitle: 'KILL TONY #608 - ADAM RAY',
    youtubeURL: 'https://www.youtube.com/watch?v=nwXSS0wBsFA',
  },
  {
    episodeTitle: 'KILL TONY #607 - SAM TALLENT',
    youtubeURL: 'https://www.youtube.com/watch?v=bF65E21wihU&t=2165s',
  },
  {
    episodeTitle: 'KILL TONY #606 - BIG JAY OAKERSON + ARI SHAFFIR',
    youtubeURL: 'https://www.youtube.com/watch?v=c-ZrYf94GNc',
  },
  {
    episodeTitle: 'KILL TONY #605 - KEVIN RYAN + H FOLEY +YANNIS PAPPAS',
    youtubeURL: 'https://www.youtube.com/watch?v=AhR6Gxz7fbI&t=4240s',
  },
  {
    episodeTitle: 'KILL TONY #604 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=vfLb_V7FEpo',
  },
  {
    episodeTitle: 'KILL TONY #603 - SHANE GILLIS',
    youtubeURL: 'https://www.youtube.com/watch?v=XnlmpnfpwoY',
  },
  {
    episodeTitle:
      'KILL TONY #602 - BERT KREISCHER + WHITNEY CUMMINGS + JIM NORTON',
    youtubeURL: 'https://www.youtube.com/watch?v=IKp_qWvX4Pc',
  },
  {
    episodeTitle: 'KILL TONY #601 - TIM DILLON + ROSEANNE',
    youtubeURL: 'https://www.youtube.com/watch?v=btlFv9eZAfw',
  },
  {
    episodeTitle: 'KILL TONY #600 - CHRIS DISTEFANO',
    youtubeURL: 'https://www.youtube.com/watch?v=jeZjoBT3xd0',
  },
  {
    episodeTitle: 'KILL TONY #599- ROSEANNE',
    youtubeURL: 'https://www.youtube.com/watch?v=LGNHsNGUovw',
  },
  {
    episodeTitle: 'KILL TONY #598 - BRIAN MOSES + THAI RIVERA',
    youtubeURL: 'https://www.youtube.com/watch?v=utEFj4ZVYAs',
  },
  {
    episodeTitle:
      'KILL TONY #597 - JIM FLORENTINE + PUNKIE JOHNSON + EDDIE PEPITONE',
    youtubeURL: 'https://www.youtube.com/watch?v=k2gOb6ltZvI',
  },
  {
    episodeTitle: 'KILL TONY #596 - ALI MACOFSKY',
    youtubeURL: 'https://www.youtube.com/watch?v=g78aqz8QXTo&t=8454s',
  },
  {
    episodeTitle: 'KILL TONY #595 - TOM PAPA',
    youtubeURL: 'https://www.youtube.com/watch?v=4AdF5UIG8wE&t=2611s',
  },
  {
    episodeTitle: 'KILL TONY #594 - ADAM RAY + JOE DEROSA',
    youtubeURL: 'https://www.youtube.com/watch?v=ERlpELUoMlw&t=5636s',
  },
  {
    episodeTitle:
      'KILL TONY #593 - ANDREW SANTINO + IAN EDWARDS + KIM CONGDON + SARA WEINSHENK',
    youtubeURL: 'https://www.youtube.com/watch?v=DjH8DSZyQks',
  },
  {
    episodeTitle: 'KILL TONY #592 - JOE ROGAN + JESSIE JOHNSON',
    youtubeURL: 'https://www.youtube.com/watch?v=3R3csSEA_JY&t=32s',
  },
  {
    episodeTitle: 'KILL TONY #591- DAVID & LUNA LUCAS',
    youtubeURL: 'https://www.youtube.com/watch?v=GjtAeNcPPkE',
  },
  {
    episodeTitle: 'KILL TONY #590 - ADAM EGET',
    youtubeURL: 'https://www.youtube.com/watch?v=6U9NcgdxegY',
  },
  {
    episodeTitle: 'KILL TONY #589 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=hpncO7ak9m8',
  },
  {
    episodeTitle: 'KILL TONY #588 - BRIAN SIMPSON',
    youtubeURL: 'https://www.youtube.com/watch?v=pJ_XzXPci6o',
  },
  {
    episodeTitle: 'KILL TONY #587 - KURT METZGER',
    youtubeURL: 'https://www.youtube.com/watch?v=bn-P5FUOjjo',
  },
  {
    episodeTitle: 'KILL TONY #586 - DEADMAU5 + GEORGE PEREZ',
    youtubeURL: 'https://www.youtube.com/watch?v=KAJpREMrMVQ',
  },
  {
    episodeTitle: 'KILL TONY #585 - TOM SEGURA',
    youtubeURL: 'https://www.youtube.com/watch?v=AbVE6mhD_rY&t=3887s',
  },
  {
    episodeTitle: 'KILL TONY #584 - RYAN LONG + CHRIS FAGA',
    youtubeURL: 'https://www.youtube.com/watch?v=zZ2MYdVkXrE&t=2003s',
  },
  {
    episodeTitle: 'KILL TONY #583 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=JwtdEXyF-w4',
  },
  {
    episodeTitle:
      'KILL TONY #582 - [SKANKFEST VEGAS] - BIG JAY OAKERSON + LUIS J GOMEZ + DAVE SMITH',
    youtubeURL: 'https://www.youtube.com/watch?v=NoUJl5eZOzw&t=4521s',
  },
  {
    episodeTitle:
      'KILL TONY #581 - [SKANKFEST VEGAS] DAVE ATTELL + IAN FIDANCE + ERIK GRIFFIN',
    youtubeURL: 'https://www.youtube.com/watch?v=PaVImNSXzmk',
  },
  {
    episodeTitle: 'KILL TONY #580 - DERIC POSTON + EHSAN AHMAD',
    youtubeURL: 'https://www.youtube.com/watch?v=qw8mGbWk24M',
  },
  {
    episodeTitle:
      'KILL TONY #579 - HANS KIM + WILLIAM MONTGOMERY + DAVID LUCAS',
    youtubeURL: 'https://www.youtube.com/watch?v=Htt8fFYgq3Q',
  },
  {
    episodeTitle:
      'KILL TONY #578 - DAVE ATTELL + GREG FITZSIMMONS + IAN FIDANCE',
    youtubeURL: 'https://www.youtube.com/watch?v=M7RsTBpU5xM&t=4265s',
  },
  {
    episodeTitle: 'KILL TONY #577 - DUNCAN TRUSSELL',
    youtubeURL: 'https://www.youtube.com/watch?v=OqL60GnEGo8',
  },
  {
    episodeTitle: 'KILL TONY #576 - JOSH WOLF + MIKE FEENEY',
    youtubeURL: 'https://www.youtube.com/watch?v=KCO567htiPc',
  },
  {
    episodeTitle: 'KILL TONY #575 - RON WHITE + BRIAN SIMPSON + RYAN LONG',
    youtubeURL: 'https://www.youtube.com/watch?v=g9OdSD0GkIc',
  },
  {
    episodeTitle:
      'KILL TONY #574 - JOE ROGAN + SHANE GILLIS + MARK NORMAND + ARI SHAFFIR',
    youtubeURL: 'https://www.youtube.com/watch?v=Fa1xlmkS-lc&t=144s',
  },
  {
    episodeTitle: 'KILL TONY #573 - JOE ROGAN',
    youtubeURL: 'https://www.youtube.com/watch?v=Jpw3b9OEMcQ',
  },
  {
    episodeTitle: 'KILL TONY #572 - IAN FIDANCE + THAI RIVERA',
    youtubeURL: 'https://www.youtube.com/watch?v=VopdOOBFE_M',
  },
  {
    episodeTitle: 'KILL TONY #571 - JEFF ROSS',
    youtubeURL: 'https://www.youtube.com/watch?v=ZjSmEBi0V1Y',
  },
  {
    episodeTitle: 'KILL TONY #570 - ANNIE LEDERMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=_ADZ-vW6TAo',
  },
  {
    episodeTitle: 'KILL TONY #569 - THEO VON',
    youtubeURL: 'https://www.youtube.com/watch?v=USqf4vuh5cY',
  },
  {
    episodeTitle: 'KILL TONY #568 - ERIK GRIFFIN',
    youtubeURL: 'https://www.youtube.com/watch?v=AwmqfhzfSQ4',
  },
  {
    episodeTitle: 'KILL TONY #567 - MARY LYNN RAJSKUB',
    youtubeURL: 'https://www.youtube.com/watch?v=vmDlX4GZ2mQ',
  },
  {
    episodeTitle: 'KILL TONY #566- LUIS J GOMEZ + AARON BERG',
    youtubeURL: 'https://www.youtube.com/watch?v=bHJw4rmV9bY',
  },
  {
    episodeTitle: 'KILL TONY #565 - SHANE GILLIS + MARK NORMAND',
    youtubeURL: 'https://www.youtube.com/watch?v=L3DfL2zAZlM',
  },
  {
    episodeTitle: "KILL TONY #564 - THE MONTGOMERY'S",
    youtubeURL: 'https://www.youtube.com/watch?v=tCP4PU5uvjE',
  },
  {
    episodeTitle: 'KILL TONY #563 - PAULY SHORE',
    youtubeURL: 'https://www.youtube.com/watch?v=GXdkc4uytYk&t=4803s',
  },
  {
    episodeTitle: 'KILL TONY #562- FAHIM ANWAR',
    youtubeURL: 'https://www.youtube.com/watch?v=8lNojo4y1LY',
  },
  {
    episodeTitle: 'KILL TONY #561 - ARI SHAFFIR + CHRIS DISTEFANO',
    youtubeURL: 'https://www.youtube.com/watch?v=RXr4ybAk1Fk',
  },
  {
    episodeTitle: 'KILL TONY #560 - DERIC POSTON',
    youtubeURL: 'https://www.youtube.com/watch?v=ut_aZAujgkA',
  },
  {
    episodeTitle: 'KILL TONY #559 - GARY CLARK JR.',
    youtubeURL: 'https://www.youtube.com/watch?v=SH63iJ_iyJk',
  },
  {
    episodeTitle:
      'KILL TONY #558 - DUNCAN TRUSSELL + DOUG STANHOPE + MICHAEL YO',
    youtubeURL: 'https://www.youtube.com/watch?v=ub-nWm3SCbU',
  },
  {
    episodeTitle: 'KILL TONY #557 - H. FOLEY + KEVIN RYAN',
    youtubeURL: 'https://www.youtube.com/watch?v=LheNmjFWCVw',
  },
  {
    episodeTitle: 'KILL TONY #556 - JAKE SHIELDS + BRIAN SIMPSON',
    youtubeURL: 'https://www.youtube.com/watch?v=2wDEtPBXWIE',
  },
  {
    episodeTitle: 'KILL TONY #555 - RACHEL WOLFSON + MAT EDGAR',
    youtubeURL: 'https://www.youtube.com/watch?v=Nh2S-h0eyt8',
  },
  {
    episodeTitle: 'KILL TONY #554 - MONTY FRANKLIN',
    youtubeURL: 'https://www.youtube.com/watch?v=eH1OPbiuAos',
  },
  {
    episodeTitle: 'KILL TONY #553 - JESSIE JOHNSON',
    youtubeURL: 'https://www.youtube.com/watch?v=eArZbWLP90I&t=8s',
  },
  {
    episodeTitle: 'KILL TONY #552 - PUNKIE JOHNSON + DICEY',
    youtubeURL: 'https://www.youtube.com/watch?v=IDKVbmV2jaU',
  },
  {
    episodeTitle: 'KILL TONY #551 - JOSH BARNETT',
    youtubeURL: 'https://www.youtube.com/watch?v=QzAAcpBuj30',
  },
  {
    episodeTitle: 'KILL TONY #550 - RICH VOS + WILLIE HUNTER',
    youtubeURL: 'https://www.youtube.com/watch?v=IUyoy1pDS-g',
  },
  {
    episodeTitle: 'KILL TONY #549 - TOM PAPA',
    youtubeURL: 'https://www.youtube.com/watch?v=JVpmhPOyZbc',
  },
  {
    episodeTitle: 'KILL TONY #548 - JOE ROGAN + FREDDIE GIBBS + BRIAN MOSES',
    youtubeURL: 'https://www.youtube.com/watch?v=SJHZFike_6U',
  },
  {
    episodeTitle: 'KILL TONY #547 - BRENDON WALSH + MATT FULCHIRON',
    youtubeURL: 'https://www.youtube.com/watch?v=_wYLQtzIsxw&t=1009s',
  },
  {
    episodeTitle: 'KILL TONY #546 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=C7f_VmK9a4A&t=2097s',
  },
  {
    episodeTitle: 'KILL TONY #545 - AKAASH SINGH',
    youtubeURL: 'https://www.youtube.com/watch?v=qGez3lpfk0Q',
  },
  {
    episodeTitle: 'KILL TONY #544 - DAVE SMITH',
    youtubeURL: 'https://www.youtube.com/watch?v=viD0MrWzDJY',
  },
  {
    episodeTitle: 'KILL TONY #543',
    youtubeURL: 'https://www.youtube.com/watch?v=P3y8sfaRvOw',
  },
  {
    episodeTitle: 'KILL TONY #542 - DANNY BROWN + JPEGMAFIA',
    youtubeURL: 'https://www.youtube.com/watch?v=hY3ChC9qWqs',
  },
  {
    episodeTitle: 'KILL TONY #541 - BENJI AFLALO',
    youtubeURL: 'https://www.youtube.com/watch?v=IWpQUFrGTAo&t=5459s',
  },
  {
    episodeTitle: 'KILL TONY #540 - EHSAN AHMAD',
    youtubeURL: 'https://www.youtube.com/watch?v=vVht96cizJs',
  },
  {
    episodeTitle: 'KILL TONY #539 - RYAN J EBELT',
    youtubeURL: 'https://www.youtube.com/watch?v=WolrLtf7AKo',
  },
  {
    episodeTitle: 'KILL TONY #538 - DAVID LUCAS',
    youtubeURL: 'https://www.youtube.com/watch?v=wcbGBD4LFKo',
  },
  {
    episodeTitle: 'KILL TONY #537 - DYLAN SULLIVAN',
    youtubeURL: 'https://www.youtube.com/watch?v=VWI5nBvpLOE',
  },
  {
    episodeTitle: 'KILL TONY #536 - WILLIAM MONTGOMERY',
    youtubeURL: 'https://www.youtube.com/watch?v=foCMZilLMqo',
  },
  {
    episodeTitle: 'KILL TONY #535 - HANS KIM',
    youtubeURL: 'https://www.youtube.com/watch?v=Lgnhr5hn7_4',
  },
  {
    episodeTitle: 'KILL TONY #534 - CHRIS TELLEZ',
    youtubeURL: 'https://www.youtube.com/watch?v=99df47sulm4',
  },
  {
    episodeTitle: 'KILL TONY #533 - ARIELLE ISAAC NORMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=8rEljsI9_h4',
  },
  {
    episodeTitle: 'KILL TONY #532 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=_Jgo9E0DQVc',
  },
  {
    episodeTitle: 'KILL TONY HIGHLIGHTS 531 - DMX Has His Last Dance',
    youtubeURL: 'https://www.youtube.com/watch?v=kjFxHf13hiE',
  },
  {
    episodeTitle: 'KILL TONY #531 - KIM CONGDON + SARA WEINSHENK',
    youtubeURL: 'https://www.youtube.com/watch?v=8ekddEfTtOU',
  },
  {
    episodeTitle: 'KILL TONY #530 - JUSTIN MARTINDALE',
    youtubeURL: 'https://www.youtube.com/watch?v=1bUVx6LFyvI',
  },
  {
    episodeTitle:
      'KILL TONY HIGHLIGHTS 526 - Joe Rogan and Bert Kreischer Big Reveal',
    youtubeURL: 'https://www.youtube.com/watch?v=uOTOR5VttTg',
  },
  {
    episodeTitle: 'KILL TONY #529 - WILLIAM MONTGOMERY',
    youtubeURL: 'https://www.youtube.com/watch?v=-8Qw-1aa1WM',
  },
  {
    episodeTitle: 'KILL TONY HIGHLIGHTS 528 - Weight Loss Challenge',
    youtubeURL: 'https://www.youtube.com/watch?v=jheoV8f-XJU',
  },
  {
    episodeTitle: 'KILL TONY #528 - HANS KIM',
    youtubeURL: 'https://www.youtube.com/watch?v=Akd4sf0hxxc',
  },
  {
    episodeTitle: 'KILLTONY HIGHLIGHTS 527 - Aunties and Bootyholes',
    youtubeURL: 'https://www.youtube.com/watch?v=bOYzfbCA0jc',
  },
  {
    episodeTitle: 'KILL TONY #527 - JAMAR NEIGHBORS + BRIAN MOSES',
    youtubeURL: 'https://www.youtube.com/watch?v=vdMg9WyIboc',
  },
  {
    episodeTitle: 'KILL TONY HIGHLIGHTS 525 - Mitch Burrow Gets A Dance',
    youtubeURL: 'https://www.youtube.com/watch?v=vQ-oFdp2LH4&t=6s',
  },
  {
    episodeTitle: 'KILL TONY #526 - JOE ROGAN + BERT KREISCHER + DOM IRERRA',
    youtubeURL: 'https://www.youtube.com/watch?v=exUm9dkM8to',
  },
  {
    episodeTitle: 'KILL TONY #525 - SHANE GILLIS + MITCH BURROW',
    youtubeURL: 'https://www.youtube.com/watch?v=MMAjwLWYk40',
  },
  {
    episodeTitle: 'KILL TONY #524 - KYLE DUNNIGAN + KURT METZGER',
    youtubeURL: 'https://www.youtube.com/watch?v=yFOY0iFFZb0',
  },
  {
    episodeTitle: 'KILL TONY #523 - ALEX JONES',
    youtubeURL: 'https://www.youtube.com/watch?v=j9ZzUTRyxMk',
  },
  {
    episodeTitle: 'KILL TONY #522 - CHRISTINA PAZSITZKY',
    youtubeURL: 'https://www.youtube.com/watch?v=KM5W137RiD8&t=1629s',
  },
  {
    episodeTitle: 'KILL TONY #521 - JOE ROGAN + ELEANOR KERRIGAN',
    youtubeURL: 'https://www.youtube.com/watch?v=RdDqjqV1-yg',
  },
  {
    episodeTitle: 'KILL TONY #520 - JIMMY SHUBERT',
    youtubeURL: 'https://www.youtube.com/watch?v=fw_7J48q5zw&t=6153s',
  },
  {
    episodeTitle: 'KILL TONY #519 - BRIAN HOLTZMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=LbrHKtnmBzs',
  },
  {
    episodeTitle: 'KILL TONY #518 - MICHAEL LEHRER',
    youtubeURL: 'https://www.youtube.com/watch?v=LZMcHi0qTwo',
  },
  {
    episodeTitle: 'KILL TONY #517 - GREG FITZSIMMONS',
    youtubeURL: 'https://www.youtube.com/watch?v=Cfq2ZyLeazE',
  },
  {
    episodeTitle: 'KILL TONY #516 - PAULY SHORE + JOSH MARTIN',
    youtubeURL: 'https://www.youtube.com/watch?v=wABmroPWT7U',
  },
  {
    episodeTitle: 'KILL TONY #515 - SHANE GILLIS',
    youtubeURL: 'https://www.youtube.com/watch?v=A0JWnKvtCAI&t=4988s',
  },
  {
    episodeTitle: 'KILL TONY #514 - DAVID LUCAS',
    youtubeURL: 'https://www.youtube.com/watch?v=ePQptiIeOy4',
  },
  {
    episodeTitle: 'KILL TONY #513 - WILLIAM MONTGOMERY',
    youtubeURL: 'https://www.youtube.com/watch?v=5usay4zQAjc',
  },
  {
    episodeTitle: 'KILL TONY #512 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=s_qc4i4VxOk&t=5437s',
  },
  {
    episodeTitle: 'KILL TONY #511 - DANNY BROWN',
    youtubeURL: 'https://www.youtube.com/watch?v=XwViWp2yuC4',
  },
  {
    episodeTitle: 'KILL TONY #510 - ALEX JONES',
    youtubeURL: 'https://www.youtube.com/watch?v=GE2eGGiwx9s&t=2239s',
  },
  {
    episodeTitle: 'Tony Hinchcliffe: Making Friends [STANDUP]',
    youtubeURL: 'https://www.youtube.com/watch?v=meBM--RXZ00',
  },
  {
    episodeTitle: 'KILL TONY #509 - LUIS J GOMEZ + ZAC AMICO',
    youtubeURL: 'https://www.youtube.com/watch?v=wgE97xfG5Xc',
  },
  {
    episodeTitle: 'KILL TONY #508 - RON WHITE + RUSSELL PETERS',
    youtubeURL: 'https://www.youtube.com/watch?v=ww89ewEcsOw&t=3942s',
  },
  {
    episodeTitle: 'KILL TONY #507 - JESSICA MICHELLE SINGLETON',
    youtubeURL: 'https://www.youtube.com/watch?v=1dxc3TUhqL8',
  },
  {
    episodeTitle: 'KILL TONY #506 - BRIAN HOLTZMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=4C4l7nbVqW8',
  },
  {
    episodeTitle: 'KILL TONY #505 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=9cFCswi6Dmw',
  },
  {
    episodeTitle: 'KILL TONY #504 - MARK NORMAND + ALI MACOFSKY',
    youtubeURL: 'https://www.youtube.com/watch?v=vWTkhlkO6fk',
  },
  {
    episodeTitle: 'KILL TONY #503 - DERIC POSTON',
    youtubeURL: 'https://www.youtube.com/watch?v=YjyVWr3Ce8Y',
  },
  {
    episodeTitle: 'KILL TONY #502 - JADE CATTA-PRETA + ADAM RAY',
    youtubeURL: 'https://www.youtube.com/watch?v=r1hbh2ZLcGI',
  },
  {
    episodeTitle: 'KILL TONY #501',
    youtubeURL: 'https://www.youtube.com/watch?v=Gj1yR5feCes',
  },
  {
    episodeTitle: 'KILL TONY #500 - JOE ROGAN',
    youtubeURL: 'https://www.youtube.com/watch?v=8vLyw775Va8',
  },
  {
    episodeTitle: 'KILL TONY #499 - DONNELL RAWLINGS',
    youtubeURL: 'https://www.youtube.com/watch?v=WwAUUjI9F_4&t=3949s',
  },
  {
    episodeTitle: 'KILL TONY #498 - JOE ROGAN + ADAM EGET',
    youtubeURL: 'https://www.youtube.com/watch?v=RUIVY8XHVVc',
  },
  {
    episodeTitle: 'KILL TONY #497 - SARA WEINSHENK + JAMAR NEIGHBORS',
    youtubeURL: 'https://www.youtube.com/watch?v=LKSktxlFAw8',
  },
  {
    episodeTitle: 'KILL TONY #496 - MIAMI - JIMMY SHUBERT',
    youtubeURL: 'https://www.youtube.com/watch?v=XaLtvj9z77U',
  },
  {
    episodeTitle: 'KILL TONY #495 - MIAMI - BENJI AFLALO',
    youtubeURL: 'https://www.youtube.com/watch?v=6txwU9YLXio',
  },
  {
    episodeTitle: 'KILL TONY #494 - JOE ROGAN + BRIAN MOSES',
    youtubeURL: 'https://www.youtube.com/watch?v=31Q9QvOCwdk',
  },
  {
    episodeTitle: 'KILL TONY #493 - BRIAN HOLTZMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=fEgqkiqgnLI',
  },
  {
    episodeTitle: 'KILL TONY #492 - DUSTIN YBARRA (PHOENIX)',
    youtubeURL: 'https://www.youtube.com/watch?v=0MpZF1HsZSc',
  },
  {
    episodeTitle: 'KILL TONY #491 - SHANE GILLIS',
    youtubeURL: 'https://www.youtube.com/watch?v=GCw8IRfziqA',
  },
  {
    episodeTitle: 'KILL TONY #490 - THE RETURN OF JOE ROGAN!',
    youtubeURL: 'https://www.youtube.com/watch?v=qAnVAgj0GfI',
  },
  {
    episodeTitle: 'KILL TONY #489',
    youtubeURL: 'https://www.youtube.com/watch?v=BGilGeGo8Ig',
  },
  {
    episodeTitle: 'KILL TONY #488',
    youtubeURL: 'https://www.youtube.com/watch?v=dIEUD5nhWEc',
  },
  {
    episodeTitle: 'KILL TONY #487- FIRST AUSTIN SHOW!',
    youtubeURL: 'https://www.youtube.com/watch?v=DZzAUxwXLAQ',
  },
  {
    episodeTitle: 'KILL TONY #486 - STEPHEN KRAMER GLICKMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=jo0aqNPvF0k',
  },
  {
    episodeTitle: 'KILL TONY #485 - SAM TRIPOLI',
    youtubeURL: 'https://www.youtube.com/watch?v=PLgfFl8qD3M',
  },
  {
    episodeTitle: 'KILL TONY #484 - JEREMIAH WATKINS',
    youtubeURL: 'https://www.youtube.com/watch?v=Td3BIJCNMCQ',
  },
  {
    episodeTitle: 'KILL TONY #483 - MITCH BURROW',
    youtubeURL: 'https://www.youtube.com/watch?v=lP7h9M1tFW8',
  },
  {
    episodeTitle: 'KILL TONY #482 - BRIAN MOSES',
    youtubeURL: 'https://www.youtube.com/watch?v=ulJH0aFy6g0',
  },
  {
    episodeTitle: 'KILL TONY #481 - DON BARRIS',
    youtubeURL: 'https://www.youtube.com/watch?v=dOm1B-UShvs',
  },
  {
    episodeTitle: 'KILL TONY #480 - Benji Aflalo',
    youtubeURL: 'https://www.youtube.com/watch?v=9-JTDVkbo-M',
  },
  {
    episodeTitle: 'KILL TONY #479 - MAT EDGAR',
    youtubeURL: 'https://www.youtube.com/watch?v=Zm7BJrP7NqQ',
  },
  {
    episodeTitle: 'KILL TONY #478 - SARA WEINSHENK',
    youtubeURL: 'https://www.youtube.com/watch?v=mNItVFGOwF4',
  },
  {
    episodeTitle: 'KILL TONY #477 - KIM CONGDON',
    youtubeURL: 'https://www.youtube.com/watch?v=_QwPnAI3Lss',
  },
  {
    episodeTitle: 'KILL TONY #476 - CORT MCCOWN',
    youtubeURL: 'https://www.youtube.com/watch?v=gDgNNSyl4Cg',
  },
  {
    episodeTitle: 'KILL TONY #475 - ERIK GRIFFIN',
    youtubeURL: 'https://www.youtube.com/watch?v=qOJ_UZyRN4s',
  },
  {
    episodeTitle: 'KILL TONY #474 - ALEX HOOPER (FIXED VERSION)',
    youtubeURL: 'https://www.youtube.com/watch?v=iOODTm2JoTc',
  },
  {
    episodeTitle: 'KILL TONY #473 - ANNIE LEDERMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=7RbtFxGUdp8',
  },
  {
    episodeTitle: 'KILL TONY #472 - JIMMY SHUBERT',
    youtubeURL: 'https://www.youtube.com/watch?v=ir0SJlxtTy4',
  },
  {
    episodeTitle: 'KILL TONY #471 - FRANK CASTILLO',
    youtubeURL: 'https://www.youtube.com/watch?v=NiqwhH9YrW8',
  },
  {
    episodeTitle: 'KILL TONY #470 - BRETT ERICKSON - STUDIO SESSIONS 25',
    youtubeURL: 'https://www.youtube.com/watch?v=lMyWXc2Z7R8',
  },
  {
    episodeTitle: 'KILL TONY #469 - JAMAR NEIGHBORS - STUDIO SESSIONS 24',
    youtubeURL: 'https://www.youtube.com/watch?v=3f5wXcetCFs',
  },
  {
    episodeTitle: 'KILL TONY #468 - JOSH ADAM MEYERS - STUDIO SESSIONS 23',
    youtubeURL: 'https://www.youtube.com/watch?v=Dvclfqe7OME',
  },
  {
    episodeTitle: 'KILL TONY #467 - ALI MACOFSKY - STUDIO SESSIONS 22',
    youtubeURL: 'https://www.youtube.com/watch?v=9PXMP_XAoQ0',
  },
  {
    episodeTitle: 'KILL TONY #466 - DONNELL RAWLINGS - STUDIO SESSIONS 21',
    youtubeURL: 'https://www.youtube.com/watch?v=VEu1Gnf_Tso',
  },
  {
    episodeTitle: 'KILL TONY #464',
    youtubeURL: 'https://www.youtube.com/watch?v=kUISZcZrMYg',
  },
  {
    episodeTitle: 'KILL TONY #463 - STUDIO SESSIONS 18',
    youtubeURL: 'https://www.youtube.com/watch?v=AhPM2nqBOTA',
  },
  {
    episodeTitle: 'KILL TONY #462 - STUDIO SESSIONS 17',
    youtubeURL: 'https://www.youtube.com/watch?v=9-1aFikp3Yg',
  },
  {
    episodeTitle: 'KILL TONY #461 - STUDIO SESSIONS 16',
    youtubeURL: 'https://www.youtube.com/watch?v=c-2aMa0qxcA',
  },
  {
    episodeTitle: 'KILL TONY #445 - VENTURA #2 (LOST EPISODE)',
    youtubeURL: 'https://www.youtube.com/watch?v=EnVFLkUVPgg',
  },
  {
    episodeTitle: 'ROAD KILL #1 - CALGARY',
    youtubeURL: 'https://www.youtube.com/watch?v=YVQ53DgyueE',
  },
  {
    episodeTitle: 'KILL TONY #446 – STUDIO SESSIONS PILOT EPISODE',
    youtubeURL: 'https://www.youtube.com/watch?v=kzO9DVM0Pcs',
  },
  {
    episodeTitle: 'KILL TONY #444 - VENTURA #1',
    youtubeURL: 'https://www.youtube.com/watch?v=HgyQkRj3bug',
  },
  {
    episodeTitle: 'KILL TONY #443 - MATT BRAUNGER + CHRISSIE MAYR',
    youtubeURL: 'https://www.youtube.com/watch?v=3TnosE2ybwE',
  },
  {
    episodeTitle: 'KILL TONY #442 – LA JOLLA #2',
    youtubeURL: 'https://www.youtube.com/watch?v=AS7F54KmbIk',
  },
  {
    episodeTitle: 'KILL TONY #441 LA JOLLA #1',
    youtubeURL: 'https://www.youtube.com/watch?v=3sxhQLpHO2k',
  },
  {
    episodeTitle: 'KILL TONY #440 - DONNELL RAWLINGS',
    youtubeURL: 'https://www.youtube.com/watch?v=vkgyA9-zgeE',
  },
  {
    episodeTitle: 'KILL TONY #439 - SWANSEA',
    youtubeURL: 'https://www.youtube.com/watch?v=hcmk0P1BA08',
  },
  {
    episodeTitle: 'KILL TONY #438 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=URE9lHZblWY',
  },
  {
    episodeTitle: 'KILLTONY #440 RECAP - DONNELL RAWLINGS VS. REGULARS',
    youtubeURL: 'https://www.youtube.com/watch?v=Jb5koZOi3Qg',
  },
  {
    episodeTitle: '(LIVE) KILL TONY #440 - DONNELL RAWLINGS',
    youtubeURL: 'https://www.youtube.com/watch?v=tGDcPHCUumI',
  },
  {
    episodeTitle: 'KILL TONY #437 - VANCOUVER',
    youtubeURL: 'https://www.youtube.com/watch?v=X0-oaBOVArI',
  },
  {
    episodeTitle: 'KILL TONY #436 - DAN SODER + DOM IRRERA',
    youtubeURL: 'https://www.youtube.com/watch?v=vE8Qjpb964U',
  },
  {
    episodeTitle: 'KILL TONY #435 - THE BIG THREE',
    youtubeURL: 'https://www.youtube.com/watch?v=q0acT6HIbVM',
  },
  {
    episodeTitle: 'SUSPECTED MURDERER GARETH PURSEHOUSE ON KILL TONY',
    youtubeURL: 'https://www.youtube.com/watch?v=KYbbYJmECe8',
  },
  {
    episodeTitle: 'KILL TONY #434 - MICHAEL RAPAPORT',
    youtubeURL: 'https://www.youtube.com/watch?v=zLxcNPqS0yQ',
  },
  {
    episodeTitle: 'SOMETHING GROSS HAPPENED IN COLUMBUS',
    youtubeURL: 'https://www.youtube.com/watch?v=wr_qUygbllM',
  },
  {
    episodeTitle: 'PHYLLIS WATKINS FIRST PERFORMANCE',
    youtubeURL: 'https://www.youtube.com/watch?v=ihLSbB5o_S0',
  },
  {
    episodeTitle: 'KILL TONY #433 - BOB SAGET + DOUG BENSON',
    youtubeURL: 'https://www.youtube.com/watch?v=O14Ol_WKbMg',
  },
  {
    episodeTitle: 'How William and Billiam met (with Ep. 433 recap)',
    youtubeURL: 'https://www.youtube.com/watch?v=26-uvkKRHCM',
  },
  {
    episodeTitle: 'KILL TONY #432 - CALGARY',
    youtubeURL: 'https://www.youtube.com/watch?v=vesK_hjxeJc',
  },
  {
    episodeTitle: 'TOP KISSES ON KILL TONY UP TO 2019',
    youtubeURL: 'https://www.youtube.com/watch?v=oJ-AqeEsUTo',
  },
  {
    episodeTitle: 'KILL TONY #431 - MOSHE KASHER',
    youtubeURL: 'https://www.youtube.com/watch?v=_IWBzZHL0xw',
  },
  {
    episodeTitle: 'KILL TONY #430 - PAULY SHORE',
    youtubeURL: 'https://www.youtube.com/watch?v=avLgvLtO10w',
  },
  {
    episodeTitle: 'KILL TONY #429 -HOUSTON #2',
    youtubeURL: 'https://www.youtube.com/watch?v=MGxFvP8-GJA',
  },
  {
    episodeTitle: 'KILL TONY #428 - HOUSTON #1',
    youtubeURL: 'https://www.youtube.com/watch?v=usRcCVbOyHc',
  },
  {
    episodeTitle: 'KILL TONY #427 - SAN ANTONIO',
    youtubeURL: 'https://www.youtube.com/watch?v=lyroyZO1I84',
  },
  {
    episodeTitle: 'KILL TONY #426 - BRIAN HOLTZMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=uq0RWvNaAGY',
  },
  {
    episodeTitle: 'KILL TONY #425 - BIG JAY OAKERSON + LUIS J GOMEZ',
    youtubeURL: 'https://www.youtube.com/watch?v=XUUCdj2BUlA',
  },
  {
    episodeTitle: 'KILL TONY #424 - KEVIN SMITH + RON WHITE + JEFF ROSS',
    youtubeURL: 'https://www.youtube.com/watch?v=6GvGjp0nYFs',
  },
  {
    episodeTitle: 'KILL TONY #423 - THEO VON',
    youtubeURL: 'https://www.youtube.com/watch?v=o6a6_D5JEkA',
  },
  {
    episodeTitle: 'KILL TONY #422 - CLEVELAND',
    youtubeURL: 'https://www.youtube.com/watch?v=YELalUPkBBk',
  },
  {
    episodeTitle: 'KILL TONY #421 - PITTSBURGH',
    youtubeURL: 'https://www.youtube.com/watch?v=e-8FgkdLHxI',
  },
  {
    episodeTitle: 'KILL TONY #420 - COLUMBUS',
    youtubeURL: 'https://www.youtube.com/watch?v=Srx-1yzzGXg',
  },
  {
    episodeTitle: 'KILL TONY #419 - ANDREW SCHULZ',
    youtubeURL: 'https://www.youtube.com/watch?v=ReVmcQZaQ0w&t=4612s',
  },
  {
    episodeTitle: 'KILL TONY #418 - ANDREW SANTINO + DAN SODER',
    youtubeURL: 'https://www.youtube.com/watch?v=iYpohOpPDrA',
  },
  {
    episodeTitle: 'KILL TONY #417 - RUSSELL PETERS + ADAM RAY',
    youtubeURL: 'https://www.youtube.com/watch?v=0Br-Ntt2NCA',
  },
  {
    episodeTitle: 'KILL TONY #416 - ERIK GRIFFIN + STEVE LEE',
    youtubeURL: 'https://www.youtube.com/watch?v=tPSP29gDTF8',
  },
  {
    episodeTitle: 'KILL TONY #415 - TIM DILLON + MIKE FEENY',
    youtubeURL: 'https://www.youtube.com/watch?v=URBCNBI8-I8',
  },
  {
    episodeTitle: 'KILL TONY #414 - SHANE GILLIS + BIG JAY OAKERSON - NYC',
    youtubeURL: 'https://www.youtube.com/watch?v=QLqTw3_3iKs',
  },
  {
    episodeTitle: 'KILL TONY #413 - DC #2',
    youtubeURL: 'https://www.youtube.com/watch?v=8LUSZuuQano',
  },
  {
    episodeTitle: 'KILL TONY #412 - DC #1',
    youtubeURL: 'https://www.youtube.com/watch?v=bZ2mFX900FI',
  },
  {
    episodeTitle: 'KILL TONY #411 - MOSHE KASHER + BONNIE MCFARLANE',
    youtubeURL: 'https://www.youtube.com/watch?v=gdSpmHBCzm4',
  },
  {
    episodeTitle: 'KILL TONY #410 - DANIEL VAN KIRK + LARA BEITZ',
    youtubeURL: 'https://www.youtube.com/watch?v=XDK6vDy8SVE',
  },
  {
    episodeTitle: 'KILL TONY #406 - DOM IRRERA + JOSH WOLF',
    youtubeURL: 'https://www.youtube.com/watch?v=kxR2ISLfDNs',
  },
  {
    episodeTitle: 'JOEL JIMENEZ SLOW MOTION BACK FLIPS',
    youtubeURL: 'https://www.youtube.com/watch?v=4kKgzpFVcZA',
  },
  {
    episodeTitle: 'KILL TONY #407 (BRISBANE)',
    youtubeURL: 'https://www.youtube.com/watch?v=R5kIGoSfGRY',
  },
  {
    episodeTitle: 'KILL TONY #409 (SYDNEY)',
    youtubeURL: 'https://www.youtube.com/watch?v=GtBydpdGfdA',
  },
  {
    episodeTitle: 'KILL TONY #408 (MELBOURNE)',
    youtubeURL: 'https://www.youtube.com/watch?v=e1yUzdHk-Zk',
  },
  {
    episodeTitle: 'KILL TONY #405 (SAN FRANCISCO)',
    youtubeURL: 'https://www.youtube.com/watch?v=cHJVtFgZv8E',
  },
  {
    episodeTitle: 'KILL TONY #404 (SAN FRANCISCO)',
    youtubeURL: 'https://www.youtube.com/watch?v=gxkduYB18ME',
  },
  {
    episodeTitle: 'KILL TONY #403 (SAN FRANCISCO)',
    youtubeURL: 'https://www.youtube.com/watch?v=KVKQQwaiGeo',
  },
  {
    episodeTitle: 'KILL TONY #402 (SAN FRANCISCO)',
    youtubeURL: 'https://www.youtube.com/watch?v=fu6c6IOFMx8',
  },
  {
    episodeTitle: 'KILL TONY #401',
    youtubeURL: 'https://www.youtube.com/watch?v=N5cANcd_d1s',
  },
  {
    episodeTitle: 'KILL TONY #400',
    youtubeURL: 'https://www.youtube.com/watch?v=Qnai5_yJiq4',
  },
  {
    episodeTitle: 'KILL TONY #399 - TOM RHODES + EDDIE PEPITONE',
    youtubeURL: 'https://www.youtube.com/watch?v=IpxH7kRcmCo',
  },
  {
    episodeTitle: 'KILL TONY #397 – MARK NORMAND - DALLAS #2',
    youtubeURL: 'https://www.youtube.com/watch?v=8Guxrw02ko0',
  },
  {
    episodeTitle: 'KILL TONY #396 – DALLAS #1',
    youtubeURL: 'https://www.youtube.com/watch?v=Rp9V4YuHoEM',
  },
  {
    episodeTitle: 'KILL TONY #395 - RYAN SICKLER + TREVOR WALLACE',
    youtubeURL: 'https://www.youtube.com/watch?v=0ZQwITniLa4',
  },
  {
    episodeTitle: 'KILL TONY #394 - MARK NORMAND + ARI SHAFFIR',
    youtubeURL: 'https://www.youtube.com/watch?v=C3z7-HH7OMg',
  },
  {
    episodeTitle: 'KILL TONY #392 – LA JOLLA #1',
    youtubeURL: 'https://www.youtube.com/watch?v=HqLSEz4Wg4c',
  },
  {
    episodeTitle: 'KILL TONY #393 - LA JOLLA #2',
    youtubeURL: 'https://www.youtube.com/watch?v=JVbl6GzB7HI',
  },
  {
    episodeTitle: 'KILL TONY #391 - DOUG BENSON + ALI MACOFSKY',
    youtubeURL: 'https://www.youtube.com/watch?v=SIph9JhO8wE',
  },
  {
    episodeTitle: 'KILL TONY #390 - JOSH POTTER',
    youtubeURL: 'https://www.youtube.com/watch?v=lIASqDNhq8w',
  },
  {
    episodeTitle: 'KILL TONY #389 - MS PAT',
    youtubeURL: 'https://www.youtube.com/watch?v=yO7_vbGJf68',
  },
  {
    episodeTitle: 'KILL TONY #388 - KYLE DUNNIGAN + SARA WEINSHENK',
    youtubeURL: 'https://www.youtube.com/watch?v=LiqSiaUhsdU',
  },
  {
    episodeTitle:
      'KILL TONY #387 - BIG JAY OAKERSON, LUIS J GOMEZ, SHANE GILLIS',
    youtubeURL: 'https://www.youtube.com/watch?v=ezQvvZ1_BsQ',
  },
  {
    episodeTitle: 'KILL TONY #386 - BIG JAY OAKERSON',
    youtubeURL: 'https://www.youtube.com/watch?v=mse6cukuGRU',
  },
  {
    episodeTitle: 'KILL TONY #385 - EDDIE BRAVO + SAM TRIPOLI',
    youtubeURL: 'https://www.youtube.com/watch?v=zZPCRuaiLzU',
  },
  {
    episodeTitle: 'KILL TONY #384 – FT WAYNE #2',
    youtubeURL: 'https://www.youtube.com/watch?v=27AwrSVelGc',
  },
  {
    episodeTitle: 'KILL TONY #383 - TODD BARRY (FT WAYNE)',
    youtubeURL: 'https://www.youtube.com/watch?v=O6uFinpfVbk',
  },
  {
    episodeTitle: 'KILL TONY #382 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=5tW3Onq7uA8',
  },
  {
    episodeTitle: 'KILL TONY #381 - PITTSBURGH',
    youtubeURL: 'https://www.youtube.com/watch?v=7ekjtayesco',
  },
  {
    episodeTitle: 'KILL TONY #380 - PHILADELPHIA',
    youtubeURL: 'https://www.youtube.com/watch?v=dKQckdw5FjA',
  },
  {
    episodeTitle: 'KILL TONY #379 - GREG FITZSIMMONS',
    youtubeURL: 'https://www.youtube.com/watch?v=R8ATUiN_B0M',
  },
  {
    episodeTitle: 'KILL TONY #378 - IAN EDWARDS',
    youtubeURL: 'https://www.youtube.com/watch?v=fjyLNhfxolw',
  },
  {
    episodeTitle: 'KILL TONY #377 - FT WORTH',
    youtubeURL: 'https://www.youtube.com/watch?v=LjMFlwNfLBQ',
  },
  {
    episodeTitle: 'KILL TONY #376 – PLANO',
    youtubeURL: 'https://www.youtube.com/watch?v=6LqQHd4vgrk',
  },
  {
    episodeTitle: 'KILL TONY #375 - DANE COOK',
    youtubeURL: 'https://www.youtube.com/watch?v=qoPc5ASnVKY',
  },
  {
    episodeTitle: 'KILL TONY #374 - TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=De99i7s-MtY',
  },
  {
    episodeTitle: 'KILL TONY #373 - SAL VULCANO',
    youtubeURL: 'https://www.youtube.com/watch?v=aRZvdPOC9TU',
  },
  {
    episodeTitle: 'KILL TONY #372 – SKANKFEST #2',
    youtubeURL: 'https://www.youtube.com/watch?v=IwY7Zq2lvck',
  },
  {
    episodeTitle: 'KILL TONY #371 - SKANKFEST #1',
    youtubeURL: 'https://www.youtube.com/watch?v=4-rqru0V8-g',
  },
  {
    episodeTitle: 'KILL TONY #368 – POUGHKEEPSIE',
    youtubeURL: 'https://www.youtube.com/watch?v=7CTYjbojL1E',
  },
  {
    episodeTitle: 'KILL TONY #367 - BRIAN HOLTZMAN',
    youtubeURL: 'https://www.youtube.com/watch?v=XJ2lh2DsYgc',
  },
  {
    episodeTitle: 'KILL TONY #366 – MINNEAPOLIS',
    youtubeURL: 'https://www.youtube.com/watch?v=3mqykQF2gK0',
  },
  {
    episodeTitle: 'KILL TONY #365 - MADISON',
    youtubeURL: 'https://www.youtube.com/watch?v=A5QKyBpdw3E',
  },
  {
    episodeTitle: 'KILL TONY #364 – CHICAGO',
    youtubeURL: 'https://www.youtube.com/watch?v=1fZPDcCY3S0',
  },
  {
    episodeTitle: 'KILL TONY #363 – MILWAUKEE',
    youtubeURL: 'https://www.youtube.com/watch?v=heFr5OW5wQU',
  },
  {
    episodeTitle: 'KILL TONY #362 - APPLETON',
    youtubeURL: 'https://www.youtube.com/watch?v=OTwi4t16Ya4',
  },
  {
    episodeTitle: 'KILL TONY #360 – DES MOINES',
    youtubeURL: 'https://www.youtube.com/watch?v=vnSyAa9xl9Y',
  },
  {
    episodeTitle: 'KILL TONY #361 - JEFF ROSS',
    youtubeURL: 'https://www.youtube.com/watch?v=en9Wmq5EZ30',
  },
  {
    episodeTitle: 'KILL TONY #359 – OMAHA',
    youtubeURL: 'https://www.youtube.com/watch?v=JsduVJ6VkX4',
  },
  {
    episodeTitle: 'KILL TONY #358 – KANSAS',
    youtubeURL: 'https://www.youtube.com/watch?v=e-vc6c_bOm8',
  },
  {
    episodeTitle: 'KILL TONY #357 - REGAN AND WATKINS',
    youtubeURL: 'https://www.youtube.com/watch?v=_mPvcO9oSZI',
  },
  {
    episodeTitle: 'KILL TONY #356 - STEVE SIMEONE',
    youtubeURL: 'https://www.youtube.com/watch?v=m4xsU9000Cs',
  },
  {
    episodeTitle: 'KILL TONY #355 - DOUG BENSON',
    youtubeURL: 'https://www.youtube.com/watch?v=28xYQ6Bfw4M',
  },
  {
    episodeTitle: 'KILL TONY #354 - SEATTLE #2',
    youtubeURL: 'https://www.youtube.com/watch?v=_sUXe_tw7LU',
  },
  {
    episodeTitle: 'KILL TONY #353 - SEATTLE #1',
    youtubeURL: 'https://www.youtube.com/watch?v=EsZ_miOhBC0',
  },
  {
    episodeTitle: 'KILL TONY #352 - VANCOUVER',
    youtubeURL: 'https://www.youtube.com/watch?v=nF1sZCW-2Vc',
  },
  {
    episodeTitle: 'KILL TONY #351 - PORTLAND',
    youtubeURL: 'https://www.youtube.com/watch?v=ByJ-ZGT-z2Y',
  },
  {
    episodeTitle: 'KILL TONY #350 - SPOKANE',
    youtubeURL: 'https://www.youtube.com/watch?v=FCKoUUhs5Ds',
  },
  {
    episodeTitle: 'KILL TONY #346 - VEGAS',
    youtubeURL: 'https://www.youtube.com/watch?v=dODLHfLLJIk',
  },
  {
    episodeTitle: 'KILL TONY #349 - BOISE',
    youtubeURL: 'https://www.youtube.com/watch?v=z11SKGo7Mc4',
  },
  {
    episodeTitle: 'KILL TONY #348 - SALT LAKE CITY',
    youtubeURL: 'https://www.youtube.com/watch?v=26R55IMQRCc',
  },
  {
    episodeTitle: 'KILL TONY #347 - DOM IRRERA',
    youtubeURL: 'https://www.youtube.com/watch?v=qn0jsejdIXg',
  },
  {
    episodeTitle: 'KILL TONY #345 - PHOENIX',
    youtubeURL: 'https://www.youtube.com/watch?v=rzE9Orncaa0',
  },
  {
    episodeTitle: 'KILL TONY #344 - ANDREW SANTINO + STEVE RANNAZZISI',
    youtubeURL: 'https://www.youtube.com/watch?v=9c_hNfnFfKE',
  },
  {
    episodeTitle: 'KILL TONY #343 - JIM GAFFIGAN + NICK SWARDSON',
    youtubeURL: 'https://www.youtube.com/watch?v=0LXdVv_FBUo',
  },
  {
    episodeTitle: 'KILL TONY #342 - LA JOLLA #2',
    youtubeURL: 'https://www.youtube.com/watch?v=MOBhRXaHK7g',
  },
  {
    episodeTitle: 'KILL TONY #341 - LA JOLLA #1',
    youtubeURL: 'https://www.youtube.com/watch?v=MmlSoY9D66c',
  },
  {
    episodeTitle: 'KILL TONY #340 - JESSIMAE PELUSO',
    youtubeURL: 'https://www.youtube.com/watch?v=giugNGwx3Xo',
  },
  {
    episodeTitle: 'KILL TONY #339 - KIRK FOX',
    youtubeURL: 'https://www.youtube.com/watch?v=XQMYvOQTQck',
  },
  {
    episodeTitle: 'KILL TONY #338 - (WEST NYACK) - LUIS J GOMEZ, KIM CONGDON',
    youtubeURL: 'https://www.youtube.com/watch?v=DYSRkKr4IDs',
  },
  {
    episodeTitle: 'KILL TONY #337 - TIFFANY HADDISH',
    youtubeURL: 'https://www.youtube.com/watch?v=7Dq1WbpGUD4',
  },
  {
    episodeTitle: 'KILL TONY #336 - ST LOUIS',
    youtubeURL: 'https://www.youtube.com/watch?v=bLop1zOBqhw',
  },
  {
    episodeTitle: 'KILL TONY #335 - LUIS J GOMEZ + DAN SODER',
    youtubeURL: 'https://www.youtube.com/watch?v=Gmg5ysW_Kr8',
  },
  {
    episodeTitle: 'KILL TONY #334 – VENTURA',
    youtubeURL: 'https://www.youtube.com/watch?v=R70h_DahtHw',
  },
  {
    episodeTitle: 'KILL TONY #333- TIM DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=cbvaiFk-K6Y',
  },
  {
    episodeTitle: 'KILL TONY #332 - PHILADELPHIA #3',
    youtubeURL: 'https://www.youtube.com/watch?v=qPPj17pU7kY',
  },
  {
    episodeTitle: 'KILL TONY #331 - PHILADELPHIA #2',
    youtubeURL: 'https://www.youtube.com/watch?v=Dmrsq4t03_o',
  },
  {
    episodeTitle: 'KILL TONY #330 – PHILADELPHIA #1',
    youtubeURL: 'https://www.youtube.com/watch?v=G0z_kffTYaI',
  },
  {
    episodeTitle: 'KILL TONY #329 - RON WHITE',
    youtubeURL: 'https://www.youtube.com/watch?v=7cWtLpqzWC0',
  },
  {
    episodeTitle: 'KILL TONY #328 - Bert Kreischer,',
    youtubeURL: 'https://www.youtube.com/watch?v=P5iXJ0vhyAE',
  },
  {
    episodeTitle: 'ROPE SNAKE! | Kill Tony Highlight',
    youtubeURL: 'https://www.youtube.com/watch?v=F5OAKVokhCo',
  },
  {
    episodeTitle: 'KILL TONY #327 - LONDON',
    youtubeURL: 'https://www.youtube.com/watch?v=TXlpWZaPEew',
  },
  {
    episodeTitle: 'KiLL TONY #326 – MANCHESTER',
    youtubeURL: 'https://www.youtube.com/watch?v=KE79gCKOCiw',
  },
  {
    episodeTitle: 'KILL TONY#325 - IRELAND',
    youtubeURL: 'https://www.youtube.com/watch?v=wCPI4CNXwzU',
  },
  {
    episodeTitle: 'KILL TONY #324 - TIFFANY HADDISH',
    youtubeURL: 'https://www.youtube.com/watch?v=JcpdJpx_t_g',
  },
  {
    episodeTitle: 'Black Girl LOVES White Guys | Kill Tony Highlight',
    youtubeURL: 'https://www.youtube.com/watch?v=o2_BdOFLrHg',
  },
  {
    episodeTitle: 'KILL TONY #323 - DANE COOK',
    youtubeURL: 'https://www.youtube.com/watch?v=BsZUgUXK6xk',
  },
  {
    episodeTitle: 'Tony Hinchcliffe reunites couple | Kill Tony Highlight',
    youtubeURL: 'https://www.youtube.com/watch?v=lLqGWXmeEZ4',
  },
  {
    episodeTitle: 'KILL TONY #322 - DOM IRRERA',
    youtubeURL: 'https://www.youtube.com/watch?v=iIqegdRaSeI',
  },
  {
    episodeTitle: 'KILL TONY #321 PHOENIX',
    youtubeURL: 'https://www.youtube.com/watch?v=uJkKVelcy6Q',
  },
  {
    episodeTitle: 'KILL TONY #320 - JEFF ROSS',
    youtubeURL: 'https://www.youtube.com/watch?v=OP-0c2w4-YM',
  },
  {
    episodeTitle: 'KILL TONY #319 - STEVEO',
    youtubeURL: 'https://www.youtube.com/watch?v=-exshTWEHRQ',
  },
  {
    episodeTitle: 'KILL TONY #318 - RALEIGH',
    youtubeURL: 'https://www.youtube.com/watch?v=BtlTJBVtWos',
  },
  {
    episodeTitle: 'KILL TONY #317 - DOUG BENSON + RANDY SKLAR',
    youtubeURL: 'https://www.youtube.com/watch?v=KwxH9U9xZO4',
  },
  {
    episodeTitle: 'KILL TONY #316 - RUSSELL PETERS',
    youtubeURL: 'https://www.youtube.com/watch?v=GKjBO_u8c84',
  },
  {
    episodeTitle: 'KILL TONY #315 - TIM J DILLON',
    youtubeURL: 'https://www.youtube.com/watch?v=GRPxNiDeZqQ',
  },
  {
    episodeTitle: 'KILL TONY #314 - LUIS J GOMEZ',
    youtubeURL: 'https://www.youtube.com/watch?v=KaJeqLWcw2w',
  },
  {
    episodeTitle: 'KILL TONY #313',
    youtubeURL: 'https://www.youtube.com/watch?v=MLEZdXXTlxA',
  },
  {
    episodeTitle: 'KILL TONY #312 - ADAM22 + BRIAN MOSES',
    youtubeURL: 'https://www.youtube.com/watch?v=sV0UAItcwq0',
  },
  {
    episodeTitle: 'KILL TONY #311 (FT WORTH)',
    youtubeURL: 'https://www.youtube.com/watch?v=MYAr4UBj3cI',
  },
  {
    episodeTitle: 'KILL TONY #310 (HOUSTON)',
    youtubeURL: 'https://www.youtube.com/watch?v=_O0Tlmpsr-A',
  },
  {
    episodeTitle: 'KILL TONY #309 - Doug Benson (AUSTIN)',
    youtubeURL: 'https://www.youtube.com/watch?v=CqQAFFI4kUk',
  },
  {
    episodeTitle: 'KILL TONY #308 (SAN ANTONIO)',
    youtubeURL: 'https://www.youtube.com/watch?v=Xnmd-hfEq1Q',
  },
  {
    episodeTitle: 'KILL TONY #307',
    youtubeURL: 'https://www.youtube.com/watch?v=Aaggto8rYy0',
  },
  {
    episodeTitle: 'KILL TONY #306 (SWANSEA)',
    youtubeURL: 'https://www.youtube.com/watch?v=G5kHPP2VMjs',
  },
  {
    episodeTitle: 'KILL TONY #305 - WHITNEY CUMMINGS',
    youtubeURL: 'https://www.youtube.com/watch?v=pHaV4Bhojiw',
  },
  {
    episodeTitle: 'KILL TONY #304 - ANDREW SANTINO',
    youtubeURL: 'https://www.youtube.com/watch?v=1SBDK7_5kJU',
  },
  {
    episodeTitle: 'KILL TONY #303 - DOM IRRERA',
    youtubeURL: 'https://www.youtube.com/watch?v=RF9EZFM3m-o',
  },
  {
    episodeTitle: 'KILL TONY #302 - JEFF DYE + ERIK GRIFFIN',
    youtubeURL: 'https://www.youtube.com/watch?v=uP2rH7hAJME',
  },
  {
    episodeTitle: 'KILL TONY #301 - KILL TONY MANIA',
    youtubeURL: 'https://www.youtube.com/watch?v=amCxYDFgYJg',
  },
  {
    episodeTitle: 'KILL TONY #300 - KILL TONY MANIA',
    youtubeURL: 'https://www.youtube.com/watch?v=RYXHQ4GSeno',
  },
  {
    episodeTitle: 'KILL TONY #299 - TODD GLASS',
    youtubeURL: 'https://www.youtube.com/watch?v=KGN6LICc1yA',
  },
  {
    episodeTitle: 'KILL TONY #298 - Jesse Joyce',
    youtubeURL: 'https://www.youtube.com/watch?v=xQfKoQPyt4Q',
  },
  {
    episodeTitle: 'KILL TONY #297 (TORONTO) - MATT BRAUNGER',
    youtubeURL: 'https://www.youtube.com/watch?v=KxX3PImJoM8',
  },
  {
    episodeTitle: 'KILL TONY #296 - Brendan Walsh + Ben Bailey',
    youtubeURL: 'https://www.youtube.com/watch?v=1E3UMP5Ao_s',
  },
  {
    episodeTitle: 'KILL TONY #295 (DETROIT) - DANNY BROWN',
    youtubeURL: 'https://www.youtube.com/watch?v=VigxTVUFR0E',
  },
  {
    episodeTitle: 'KILL TONY #294 (GRAND RAPIDS)',
    youtubeURL: 'https://www.youtube.com/watch?v=dsRjc-TcbzY',
  },
  {
    episodeTitle: 'KILL TONY #293 (LANSING)',
    youtubeURL: 'https://www.youtube.com/watch?v=xHW6g_ahNKI',
  },
  {
    episodeTitle: 'KILL TONY #292- SKLAR BROTHERS + DANIEL VAN KIRK',
    youtubeURL: 'https://www.youtube.com/watch?v=yMmyr96wU8Y',
  },
  {
    episodeTitle: 'KILL TONY #291 - Chris Pontius',
    youtubeURL: 'https://www.youtube.com/watch?v=dl5Ok3cjciY',
  },
  {
    episodeTitle: 'KILL TONY #290 - Rick Ingraham',
    youtubeURL: 'https://www.youtube.com/watch?v=OIKk5pTDW3U',
  },
  {
    episodeTitle: 'KILL TONY #289 - Ethan Klein, Hila Klein ( H3 PODCAST)',
    youtubeURL: 'https://www.youtube.com/watch?v=U6gCFnHCUSk',
  },
  {
    episodeTitle: 'KILL TONY #288 - Too Short, Luis J Gomez',
    youtubeURL: 'https://www.youtube.com/watch?v=rwvJnC2pRdM',
  },
  {
    episodeTitle: 'KILL TONY #287 - Brendan Schaub',
    youtubeURL: 'https://www.youtube.com/watch?v=89nTEABH7MY',
  },
  {
    episodeTitle: 'KILL TONY #286 (NASHVILLE)',
    youtubeURL: 'https://www.youtube.com/watch?v=uK-va9se0ZA',
  },
  {
    episodeTitle: 'KILL TONY LIVE STREAM 8/13/2018 (CENSORED) - BRENDAN SCHAUB',
    youtubeURL: 'https://www.youtube.com/watch?v=Q-eP1UQ4La8',
  },
  {
    episodeTitle: 'KILL TONY #285 - Russell Peters',
    youtubeURL: 'https://www.youtube.com/watch?v=vr7bfLr5Bm8',
  },
  {
    episodeTitle: 'KILL TONY #284 (FT WAYNE) - ANDY KINDLER',
    youtubeURL: 'https://www.youtube.com/watch?v=yZ97_iV_UrQ',
  },
  {
    episodeTitle: 'KILL TONY #283 (CINCINNATI)',
    youtubeURL: 'https://www.youtube.com/watch?v=uCWFnuOvrDE',
  },
  {
    episodeTitle: 'KILL TONY #282 (CLEVELAND)',
    youtubeURL: 'https://www.youtube.com/watch?v=Lr1TkzE5G6A',
  },
  {
    episodeTitle: 'KILL TONY #281- Willie Hunter, Connor McSpadden',
    youtubeURL: 'https://www.youtube.com/watch?v=BkvIx1_iziY',
  },
  {
    episodeTitle: 'KILL TONY #279 - Ryan O’Neill, Jeff Danis',
    youtubeURL: 'https://www.youtube.com/watch?v=0bPuNmFl0fI',
  },
  {
    episodeTitle: 'KILL TONY #280 - (MONTREAL) + Big Jay Oakerson, Jimmy Carr',
    youtubeURL: 'https://www.youtube.com/watch?v=UAORP2SW9I8',
  },
  {
    episodeTitle: 'KILL TONY #278 - Tom Rhodes, Moshe Kasher',
    youtubeURL: 'https://www.youtube.com/watch?v=YoSjiVfEl1o',
  },
  {
    episodeTitle: 'KILL TONY #260 - Sklar Brothers',
    youtubeURL: 'https://www.youtube.com/watch?v=8d_polyCd90',
  },
  {
    episodeTitle: 'KILL TONY #261 - Natasha Leggero, Moshe Kasher,',
    youtubeURL: 'https://www.youtube.com/watch?v=ZHfPPRBYGlg',
  },
  {
    episodeTitle: 'KILL TONY #264 - Stephen Rannazzisi',
    youtubeURL: 'https://www.youtube.com/watch?v=yCg3WwYNf1I',
  },
  {
    episodeTitle: 'KILL TONY #263 - Sara Weinshenk, Ali Macofsky',
    youtubeURL: 'https://www.youtube.com/watch?v=lA0yIKq6NA0',
  },
  {
    episodeTitle: 'KILL TONY #273 (5 YEAR SPECIAL) - Joe Rogan, Dom Irrera',
    youtubeURL: 'https://www.youtube.com/watch?v=nMs_K-5zlQk',
  },
  {
    episodeTitle: 'KILL TONY #270 - Byron Bowers, Jamar Neighbors',
    youtubeURL: 'https://www.youtube.com/watch?v=aTUQHpvdPqA',
  },
  {
    episodeTitle: 'KILL TONY #268 - Bert Kreischer, Bobby Lee',
    youtubeURL: 'https://www.youtube.com/watch?v=8_2lYJQztRI',
  },
  {
    episodeTitle: 'KILL TONY #271 - Kirk Fox',
    youtubeURL: 'https://www.youtube.com/watch?v=FB6q-RxYVUo',
  },
  {
    episodeTitle: 'KILL TONY #272 - Danger Ehren',
    youtubeURL: 'https://www.youtube.com/watch?v=7tF3RG6Vs_E',
  },
  {
    episodeTitle: 'KILL TONY #266 - Bret Ernst',
    youtubeURL: 'https://www.youtube.com/watch?v=q_oLCn4XRnI',
  },
  {
    episodeTitle: 'KILL TONY #269 - Ron Funches, Brent Morin',
    youtubeURL: 'https://www.youtube.com/watch?v=Fd-XcpeSQtU',
  },
  {
    episodeTitle: 'KILL TONY #276 - Jeff Garlin',
    youtubeURL: 'https://www.youtube.com/watch?v=bAdt_2fXJak',
  },
  {
    episodeTitle: 'KILL TONY #274 - Tom Segura',
    youtubeURL: 'https://www.youtube.com/watch?v=4BNy7hUEiVQ',
  },
  {
    episodeTitle: 'KILL TONY #275 - Marc Maron, Doug Benson',
    youtubeURL: 'https://www.youtube.com/watch?v=Wklxid1-_Xc',
  },
  {
    episodeTitle: 'Kill Tony #277 (SKANKFEST) - Big Jay Oakerson, Dave Smith',
    youtubeURL: 'https://www.youtube.com/watch?v=9X77vtdTxwE',
  },
  {
    episodeTitle: 'Kill Tony | Ep. 243 Highlight | Steve-O',
    youtubeURL: 'https://www.youtube.com/watch?v=MwPXgM04x6k',
  },
  {
    episodeTitle: 'KILL TONY 236 in 360° w/ Ron White',
    youtubeURL: 'https://www.youtube.com/watch?v=I9YIb9BrSEw',
  },
  {
    episodeTitle: 'Kill Tony | Ep. 203 Highlight | Ali Macofsky',
    youtubeURL: 'https://www.youtube.com/watch?v=s1-kjTcFB88',
  },
  {
    episodeTitle: 'Kill Tony | 1st Sets | Patrick B. | + JOELBERG is born!',
    youtubeURL: 'https://www.youtube.com/watch?v=ok269uW5K0U',
  },
  {
    episodeTitle: 'KILL TONY 235 in 360°',
    youtubeURL: 'https://www.youtube.com/watch?v=OJQ7OheV6z4',
  },
  {
    episodeTitle: 'KILL TONY 234 in 360°',
    youtubeURL: 'https://www.youtube.com/watch?v=iYPUc1gX8Y4',
  },
  {
    episodeTitle: 'Kill Tony | 1st Sets | Erik Shryock',
    youtubeURL: 'https://www.youtube.com/watch?v=yXiOs2ftq5I',
  },
  {
    episodeTitle: 'Kill Tony | Ep. 200 Highlight | J. Snow',
    youtubeURL: 'https://www.youtube.com/watch?v=g7q4--e_rAs',
  },
  {
    episodeTitle: 'Kill Tony | Ep. 200 Highlight | Aphrodite',
    youtubeURL: 'https://www.youtube.com/watch?v=viWi8WO2Dlg',
  },
  {
    episodeTitle: 'Kill Tony | Ep. 200 Highlight | Mikey McKernan',
    youtubeURL: 'https://www.youtube.com/watch?v=6boBu4e25Fs',
  },
  {
    episodeTitle: 'Kill Tony #232 360',
    youtubeURL: 'https://www.youtube.com/watch?v=PyEubQ7wwF8',
  },
  {
    episodeTitle: 'Kill Tony #225- Erik Griffin, Doug Benson',
    youtubeURL: 'https://www.youtube.com/watch?v=-XmkFhXfihc',
  },
  {
    episodeTitle: 'Kill Tony #224- Ron White, Benji Aflalo, Jak Knight',
    youtubeURL: 'https://www.youtube.com/watch?v=Zht37mcWv0k',
  },
  {
    episodeTitle: 'Kill Tony #222- Russell Peters, Steve-O',
    youtubeURL: 'https://www.youtube.com/watch?v=ulIdy0Y_c-c',
  },
  {
    episodeTitle: "Ron White's EPIC Set",
    youtubeURL: 'https://www.youtube.com/watch?v=gFPXmIM8EXI',
  },
  {
    episodeTitle: 'Feminist Stacy OWNS Erik Griffin',
    youtubeURL: 'https://www.youtube.com/watch?v=x0xdNx0814Q',
  },
  {
    episodeTitle: 'Kill Tony #190 - Doug Benson, Big Jay Oakerson & Dom Irrera',
    youtubeURL: 'https://www.youtube.com/watch?v=pJtNBld3pcU',
  },
  {
    episodeTitle: 'Kill Tony #189 - Jayson Thibault & Steve Simeone',
    youtubeURL: 'https://www.youtube.com/watch?v=Kp-s3ZtEyB8',
  },
  {
    episodeTitle: 'Kill Tony #188 - Tait Fletcher & Jay Larson',
    youtubeURL: 'https://www.youtube.com/watch?v=8t73zf8SnEA',
  },
  {
    episodeTitle: 'Kill Tony - Joe DeRosa & Maz Jobrani',
    youtubeURL: 'https://www.youtube.com/watch?v=YibcHyot4IA',
  },
  {
    episodeTitle: 'Kill Tony #186 - Luis J Gomez & Mike Lawrence',
    youtubeURL: 'https://www.youtube.com/watch?v=AwoFlC0NNbw',
  },
  {
    episodeTitle: 'Kill Tony #185 - Brody Stevens & Moshe Kasher',
    youtubeURL: 'https://www.youtube.com/watch?v=bXBkH3ZQaA4',
  },
  {
    episodeTitle: 'Kill Tony #184 - Greg Fitzsimmons',
    youtubeURL: 'https://www.youtube.com/watch?v=TfDDB3x6ejk',
  },
  {
    episodeTitle: 'Kill Tony #181 - Jade Catta-Preta & George Perez',
    youtubeURL: 'https://www.youtube.com/watch?v=312XjqR2HsA',
  },
  {
    episodeTitle: 'Kill Tony #180 - Jim Norton, Sam Roberts & Earl Skakel',
    youtubeURL: 'https://www.youtube.com/watch?v=xjh8ZL0Irw8',
  },
  {
    episodeTitle:
      'Kill Tony #179 - Jessica Michelle Singleton & Candice Thompson',
    youtubeURL: 'https://www.youtube.com/watch?v=bhZG0SZfM6k',
  },
  {
    episodeTitle: 'Kill Tony #175 - Russell Peters & Joe Rogan',
    youtubeURL: 'https://www.youtube.com/watch?v=FBdPugYtFqI',
  },
  {
    episodeTitle: 'Kill Tony #174 - Mike Lawrence & Earl Skakel',
    youtubeURL: 'https://www.youtube.com/watch?v=mh22ppLoDFQ',
  },
  {
    episodeTitle: 'Kill Tony #173 - Dom Irrera',
    youtubeURL: 'https://www.youtube.com/watch?v=pTjHKw_Eq-I',
  },
  {
    episodeTitle: 'Kill Tony #172 - Doug Benson & Jerron Horton',
    youtubeURL: 'https://www.youtube.com/watch?v=7bQ7c_2FxRQ',
  },
  {
    episodeTitle: 'Kill Tony #170 - Stephen Glickman & Mike Lawrence',
    youtubeURL: 'https://www.youtube.com/watch?v=uwdCepc3zy4',
  },
  {
    episodeTitle: 'Kill Tony #169 - Brian Moses & Bert Kreischer',
    youtubeURL: 'https://www.youtube.com/watch?v=Xh9RwpCoBBk',
  },
  {
    episodeTitle: 'Kill Tony #167 - David Arquette & Steve Simeone',
    youtubeURL: 'https://www.youtube.com/watch?v=88u-GTr46RA',
  },
  {
    episodeTitle: 'Kill Tony #166 - Kirk Fox & Jamar Neighbors',
    youtubeURL: 'https://www.youtube.com/watch?v=imQTzmkBVXs',
  },
  {
    episodeTitle: 'Kill Tony #165 - Al Madrigal',
    youtubeURL: 'https://www.youtube.com/watch?v=O9aC1Mok-_k',
  },
  {
    episodeTitle: 'Kill Tony #164 - Pat Regan & Jeremiah Watkins',
    youtubeURL: 'https://www.youtube.com/watch?v=zD9fuPP5T98',
  },
  {
    episodeTitle: 'Kill Tony #163 - Brody Stevens & Josh Wolf',
    youtubeURL: 'https://www.youtube.com/watch?v=SutySE4xXjM',
  },
  {
    episodeTitle: 'Kill Tony #162 - Dom Irrera & Ian Edwards',
    youtubeURL: 'https://www.youtube.com/watch?v=FYdNvYNjmpk',
  },
  {
    episodeTitle: 'Kill Tony #161 - Joe DeRosa & Big Jay Oakerson',
    youtubeURL: 'https://www.youtube.com/watch?v=9aQyNAK5vMM',
  },
  {
    episodeTitle: 'Kill Tony #159 - Dan St. Germain & Jesus Trejo',
    youtubeURL: 'https://www.youtube.com/watch?v=ZoPJu2-uzUg',
  },
  {
    episodeTitle: 'Kill Tony #158 - Moshe Kasher',
    youtubeURL: 'https://www.youtube.com/watch?v=UyZxydu1VSM',
  },
  {
    episodeTitle: 'Kill Tony #155 - Deon Cole & Benji Aflalo',
    youtubeURL: 'https://www.youtube.com/watch?v=PvoV0KJpvZw',
  },
  {
    episodeTitle: 'Kill Tony #154 - Jesse Joyce & Byron Bowers',
    youtubeURL: 'https://www.youtube.com/watch?v=HtKUKzKkZ6s',
  },
  {
    episodeTitle: 'Kill Tony #153 - Jeff Danis & Brian Moses',
    youtubeURL: 'https://www.youtube.com/watch?v=f-aOqbD_pAI',
  },
  {
    episodeTitle: 'Kill Tony #152 - Luis J Gomez & Mike Lawrence',
    youtubeURL: 'https://www.youtube.com/watch?v=_zKOXWHOxos',
  },
  {
    episodeTitle: 'Kill Tony #151 - Doug Benson & Eleanor Kerrigan',
    youtubeURL: 'https://www.youtube.com/watch?v=HfxAAUXxpkA',
  },
  {
    episodeTitle: 'Kill Tony #150 - Morgan Murphy & Sam Tripoli',
    youtubeURL: 'https://www.youtube.com/watch?v=HJRLOpm43C0',
  },
  {
    episodeTitle: 'Kill Tony #149 - Kirk Fox & Bert Kreischer',
    youtubeURL: 'https://www.youtube.com/watch?v=xaVXSgFw-5c',
  },
  {
    episodeTitle: 'Kill Tony #148 - Bill Burr, Dom Irrera & Andrew Themeles',
    youtubeURL: 'https://www.youtube.com/watch?v=gkb2_eiYSdo',
  },
];

const MANUAL_RECONCILIATION = [
  {
    episodeTitle: 'Kill Tony - Joe DeRosa & Maz Jobrani',
    episodeNumber: '187',
  },
  {
    episodeTitle: 'KILL TONY #261 - Natasha Leggero, Moshe Kasher,',
    episodeNumber: '261',
  },
];

(async function main() {
  const episodes = await prisma.episode.findMany();
  const matches = episodes.map((episode) => {
    const episodeNumber = episode.title?.match(/\# ?(\d+)/)?.[1];
    const episodeRegExp = new RegExp(`\# ?${episodeNumber}`);
    const youtubeMatch = data.find((d) => episodeRegExp.test(d.episodeTitle));
    return [episode, youtubeMatch];
  });
  MANUAL_RECONCILIATION.forEach((m) => {
    const episode = episodes.find((e) => e.title.includes(m.episodeNumber));
    const youtubeMatch = data.find((d) => d.episodeTitle === m.episodeTitle);
    matches.push([episode, youtubeMatch]);
  });
  // for each match update the youtubeURL in the db
  for (const [episode, youtubeMatch] of matches) {
    if (youtubeMatch) {
      await prisma.episode.update({
        where: { id: episode.id },
        data: { youtubeUrl: youtubeMatch.youtubeURL },
      });
    } else {
      console.log('no match for', episode.title);
    }
  }
  
})();
