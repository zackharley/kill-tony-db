-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "hasGoldenTicket" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isActiveRegular" BOOLEAN NOT NULL DEFAULT false;
