/*
  Warnings:

  - You are about to drop the column `googleUid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitterUid` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firebaseUid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firebaseUid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User.twitterUid_unique";

-- DropIndex
DROP INDEX "User.googleUid_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleUid",
DROP COLUMN "twitterUid",
ADD COLUMN     "firebaseUid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.firebaseUid_unique" ON "User"("firebaseUid");
