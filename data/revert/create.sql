-- Revert beecoming_test:create from pg

BEGIN;

DROP TABLE IF EXISTS cities;

COMMIT;
