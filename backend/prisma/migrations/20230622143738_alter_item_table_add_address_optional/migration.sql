/*
  Warnings:

  - Made the column `addressId` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_addressId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "addressId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ItemEvent" ADD COLUMN     "itemId" INTEGER,
ADD COLUMN     "title" TEXT;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "ItemAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemEvent" ADD CONSTRAINT "ItemEvent_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
