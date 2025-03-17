--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE game;
--
-- Name: game; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE game WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE game OWNER TO freecodecamp;

\connect game

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: data; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.data (
    username character varying(22),
    games_played integer DEFAULT 0,
    best_game integer DEFAULT 1000,
    user_id integer NOT NULL
);


ALTER TABLE public.data OWNER TO freecodecamp;

--
-- Name: data_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.data_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_user_id_seq OWNER TO freecodecamp;

--
-- Name: data_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.data_user_id_seq OWNED BY public.data.user_id;


--
-- Name: data user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.data ALTER COLUMN user_id SET DEFAULT nextval('public.data_user_id_seq'::regclass);


--
-- Data for Name: data; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.data VALUES ('user_1742206660796', 5, 81, 140);
INSERT INTO public.data VALUES ('Favenn', 19, 81, 11);
INSERT INTO public.data VALUES ('user_1742205496846', 5, 81, 96);
INSERT INTO public.data VALUES ('user_1742205510453', 5, 81, 98);
INSERT INTO public.data VALUES ('user_1742205518866', 5, 81, 100);
INSERT INTO public.data VALUES ('user_1742205553290', 5, 81, 102);
INSERT INTO public.data VALUES ('user_1742205609455', 5, 81, 104);
INSERT INTO public.data VALUES ('user_1742205620534', 5, 81, 106);
INSERT INTO public.data VALUES ('user_1742205625134', 5, 81, 108);
INSERT INTO public.data VALUES ('user_1742205627144', 5, 81, 110);
INSERT INTO public.data VALUES ('user_1742205630125', 5, 81, 112);
INSERT INTO public.data VALUES ('user_1742205632977', 5, 81, 114);
INSERT INTO public.data VALUES ('user_1742205684755', 5, 81, 116);
INSERT INTO public.data VALUES ('user_1742205690919', 5, 81, 118);
INSERT INTO public.data VALUES ('user_1742205693628', 5, 81, 120);
INSERT INTO public.data VALUES ('user_1742205811497', 5, 81, 122);
INSERT INTO public.data VALUES ('user_1742205858630', 5, 81, 124);
INSERT INTO public.data VALUES ('user_1742205861089', 5, 81, 126);
INSERT INTO public.data VALUES ('user_1742206302961', 5, 81, 128);
INSERT INTO public.data VALUES ('user_1742206655903', 5, 81, 138);
INSERT INTO public.data VALUES ('user_1742206655902', 2, 81, 139);
INSERT INTO public.data VALUES ('user_1742206660795', 2, 81, 141);
INSERT INTO public.data VALUES ('user_1742206715531', 5, 81, 142);
INSERT INTO public.data VALUES ('user_1742207097676', 5, 81, 144);
INSERT INTO public.data VALUES ('user_1742207295375', 5, 81, 146);
INSERT INTO public.data VALUES ('user_1742207300802', 5, 81, 148);
INSERT INTO public.data VALUES ('user_1742207416846', 5, 81, 152);
INSERT INTO public.data VALUES ('user_1742206305935', 5, 81, 130);
INSERT INTO public.data VALUES ('user_1742206308321', 5, 81, 132);
INSERT INTO public.data VALUES ('user_1742206310619', 5, 81, 134);
INSERT INTO public.data VALUES ('user_1742206316709', 5, 81, 136);
INSERT INTO public.data VALUES ('user_1742206305934', 2, 81, 131);
INSERT INTO public.data VALUES ('user_1742205632976', 2, 81, 115);
INSERT INTO public.data VALUES ('NT', 21, 81, 6);
INSERT INTO public.data VALUES ('user_1742205496845', 2, 81, 97);
INSERT INTO public.data VALUES ('user_1742205510452', 2, 81, 99);
INSERT INTO public.data VALUES ('user_1742205518865', 2, 81, 101);
INSERT INTO public.data VALUES ('user_1742205553289', 2, 81, 103);
INSERT INTO public.data VALUES ('user_1742205609454', 2, 81, 105);
INSERT INTO public.data VALUES ('user_1742205620533', 2, 81, 107);
INSERT INTO public.data VALUES ('user_1742205625133', 2, 81, 109);
INSERT INTO public.data VALUES ('user_1742205627143', 2, 81, 111);
INSERT INTO public.data VALUES ('user_1742205630124', 2, 81, 113);
INSERT INTO public.data VALUES ('user_1742205684754', 2, 81, 117);
INSERT INTO public.data VALUES ('user_1742205690918', 2, 81, 119);
INSERT INTO public.data VALUES ('user_1742207416845', 2, 81, 153);
INSERT INTO public.data VALUES ('user_1742205693627', 2, 81, 121);
INSERT INTO public.data VALUES ('user_1742205811496', 2, 81, 123);
INSERT INTO public.data VALUES ('user_1742205858629', 2, 81, 125);
INSERT INTO public.data VALUES ('user_1742205861088', 2, 81, 127);
INSERT INTO public.data VALUES ('user_1742206302960', 2, 81, 129);
INSERT INTO public.data VALUES ('user_1742206308320', 2, 81, 133);
INSERT INTO public.data VALUES ('user_1742206310618', 2, 81, 135);
INSERT INTO public.data VALUES ('user_1742206316708', 2, 81, 137);
INSERT INTO public.data VALUES ('user_1742206715530', 2, 81, 143);
INSERT INTO public.data VALUES ('user_1742207097675', 2, 81, 145);
INSERT INTO public.data VALUES ('user_1742207295374', 2, 81, 147);
INSERT INTO public.data VALUES ('user_1742207300801', 2, 81, 149);
INSERT INTO public.data VALUES ('user_1742207310707', 2, 81, 151);
INSERT INTO public.data VALUES ('user_1742207310708', 5, 81, 150);


--
-- Name: data_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.data_user_id_seq', 153, true);


--
-- Name: data data_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.data
    ADD CONSTRAINT data_pkey PRIMARY KEY (user_id);


--
-- Name: data unique_username; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.data
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- PostgreSQL database dump complete
--

