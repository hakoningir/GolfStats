CREATE TABLE Courses(
    id CHAR(6) PRIMARY KEY,
    name VARCHAR(64) NOT NULL
);

CREATE TABLE Holes(
    number INT,
    par INT,
    courseId CHAR(6),
    PRIMARY KEY (number, courseId),
    CONSTRAINT fk_course FOREIGN KEY (courseId) REFERENCES Courses(id)
);

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL
);

CREATE TABLE Rounds(
    roundId SERIAL PRIMARY KEY,
    courseId CHAR(6),
    played DATE,
    userId INTEGER REFERENCES Users(id),
    FOREIGN KEY (courseId) REFERENCES Courses(id)
);

CREATE TABLE Statistics(
    score INT,
    putts INT,
    hitFairway VARCHAR(64),
    hitGreen VARCHAR(64),
    upAndDown BOOLEAN,
    bunker BOOLEAN,
    sandSave BOOLEAN,
    inside100 INT,
    holeNumber INT,
    courseId CHAR(6),
    roundId serial,
    PRIMARY KEY (holeNumber, courseId, roundId),
    FOREIGN KEY (holeNumber, courseId) REFERENCES Holes (number, courseId),
    FOREIGN KEY (roundId) REFERENCES Rounds (roundId)
);
