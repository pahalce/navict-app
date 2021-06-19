/*
  Warnings:

  - A unique constraint covering the columns `[title,link]` on the table `Library` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Library.title_link_unique" ON "Library"("title", "link");
