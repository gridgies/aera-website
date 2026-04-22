-- Add beta-waitlist approval gate to profiles
-- Run in Supabase SQL Editor

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS approved       BOOLEAN      DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS waitlisted_at  TIMESTAMPTZ;
