/*
  Warnings:

  - You are about to drop the column `isGoalSet` on the `Roadmap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Roadmap" DROP COLUMN "isGoalSet",
ADD COLUMN     "goal" TEXT;
