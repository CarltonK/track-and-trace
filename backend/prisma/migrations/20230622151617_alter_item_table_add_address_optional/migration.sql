-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_addressId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "ItemAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;
