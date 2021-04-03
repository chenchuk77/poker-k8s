
-- create a database for ranker
CREATE DATABASE IF NOT EXISTS ranker;

-- create table to store request by frontends
CREATE  TABLE IF NOT EXISTS ranker.requests (
  `id`              INT  AUTO_INCREMENT ,
  `request_time`    DATE,
  `processing_time` FLOAT,
  `frontend`        VARCHAR(64),
  `backend`         VARCHAR(64),
  `my_cards`        VARCHAR(4),
  `op_cards`        VARCHAR(4),
  `samples`         INT,
  `win_percent`     FLOAT,
  `draws_percent`   FLOAT,
  `lost_percent`   FLOAT,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;

