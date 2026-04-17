-- Extend profiles table with quiz result fields and user details
-- Run in Supabase SQL Editor after 001_companion.sql

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS vorname          TEXT,
  ADD COLUMN IF NOT EXISTS secondary_profile TEXT,
  ADD COLUMN IF NOT EXISTS klarheit         INTEGER,
  ADD COLUMN IF NOT EXISTS hp_overlap       BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS quiz_answers     JSONB;
