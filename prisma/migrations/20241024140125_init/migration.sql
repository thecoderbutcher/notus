/*
  Warnings:

  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "birthday" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthday";
