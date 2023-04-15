CREATE TABLE Courses(
    PRIMARY KEY name VARCHAR(64),
    PRIMARY KEY id VARCHAR(64)
);

CREATE TABLE Holes(
    PRIMARY KEY number INT,
    PRIMARY KEY par INT,
    FOREIGN KEY (courseId) REFERENCES Courses (id) 
);

CREATE TABLE Rounds(
    score INT,
    putts INT,
    hitFarway VARCHAR(64),
    hitGreen VARCHAR(64),
    upAndDown BOOLEAN,
    bunker BOOLEAN,
    sandSave BOOLEAN,
    inside100 INT,
    FOREIGN KEY (courseName) REFERENCES Courses (name),
    FOREIGN KEY (number, par) REFERENCES Holes (number, par),
    played DATE
);