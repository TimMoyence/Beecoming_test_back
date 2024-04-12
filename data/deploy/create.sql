-- Deploy beecoming_test:create to pg

BEGIN;

CREATE TABLE cities (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "population" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);


COMMIT;
