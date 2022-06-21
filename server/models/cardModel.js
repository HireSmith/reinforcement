CREATE TABLE "public.cards" (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
    "type" VARCHAR NOT NULL,
	"company" VARCHAR NOT NULL,
	"question" VARCHAR NOT NULL,
	"answer" VARCHAR NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


