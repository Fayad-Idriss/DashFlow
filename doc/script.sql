CREATE TABLE calendar(
   Id_Calendar COUNTER,
   date_ DATE NOT NULL,
   name VARCHAR(50) NOT NULL,
   description VARCHAR(100),
   PRIMARY KEY(Id_Calendar)
);

CREATE TABLE task(
   Id_task COUNTER,
   name VARCHAR(50) NOT NULL,
   description VARCHAR(50),
   finish LOGICAL NOT NULL,
   date_ DATE NOT NULL,
   PRIMARY KEY(Id_task)
);

CREATE TABLE chrono(
   Id_chrono COUNTER,
   time_ COUNTER NOT NULL,
   PRIMARY KEY(Id_chrono)
);

CREATE TABLE bank(
   Id_bank COUNTER,
   number DECIMAL(15,2) NOT NULL,
   PRIMARY KEY(Id_bank),
   UNIQUE(number)
);

CREATE TABLE user_(
   Id_user COUNTER,
   firstname VARCHAR(100) NOT NULL,
   lastname VARCHAR(100) NOT NULL,
   email VARCHAR(255) NOT NULL,
   passeword VARCHAR(50) NOT NULL,
   sex LOGICAL NOT NULL,
   Id_bank INT NOT NULL,
   Id_chrono INT NOT NULL,
   Id_task INT NOT NULL,
   Id_Calendar INT NOT NULL,
   PRIMARY KEY(Id_user),
   UNIQUE(Id_bank),
   UNIQUE(Id_chrono),
   UNIQUE(Id_task),
   UNIQUE(Id_Calendar),
   UNIQUE(email),
   FOREIGN KEY(Id_bank) REFERENCES bank(Id_bank),
   FOREIGN KEY(Id_chrono) REFERENCES chrono(Id_chrono),
   FOREIGN KEY(Id_task) REFERENCES task(Id_task),
   FOREIGN KEY(Id_Calendar) REFERENCES calendar(Id_Calendar)
);
