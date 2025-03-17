-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "lastname" VARCHAR NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
