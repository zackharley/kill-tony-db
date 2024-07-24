/*
  Warnings:

  - Changed the type of `airDate` on the `Episode` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "airDate",
ADD COLUMN     "airDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "instagramUrl" DROP NOT NULL,
ALTER COLUMN "tiktokUrl" DROP NOT NULL,
ALTER COLUMN "twitterUrl" DROP NOT NULL,
ALTER COLUMN "youtubeUrl" DROP NOT NULL;
