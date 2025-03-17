/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" VARCHAR NOT NULL,
ADD COLUMN     "birthdate" VARCHAR(8) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP,
ADD COLUMN     "email" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
