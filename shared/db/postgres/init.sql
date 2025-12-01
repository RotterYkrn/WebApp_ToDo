-- 今後作成されるオブジェクトに対して、developerユーザーに全権限を自動で付与する

-- 1. 今後作成されるすべてのテーブル (TABLES) に対する権限
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
  GRANT ALL ON TABLES TO developer;

-- 2. 今後作成されるすべてのシーケンス (SEQUENCES) に対する権限
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
  GRANT ALL ON SEQUENCES TO developer;

-- 3. 今後作成されるすべての関数 (FUNCTIONS) に対する権限
ALTER DEFAULT PRIVILEGES IN SCHEMA public 
  GRANT ALL ON FUNCTIONS TO developer;
