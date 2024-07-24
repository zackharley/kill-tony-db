/*
  Warnings:

  - You are about to drop the column `recordedAt` on the `Episode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "recordedAt",
ADD COLUMN     "recordingDate" TIMESTAMP(3);
