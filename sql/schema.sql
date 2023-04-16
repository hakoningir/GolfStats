DROP TABLE IF EXISTS Rounds;
DROP TABLE IF EXISTS Holes;
DROP TABLE IF EXISTS Courses;

CREATE TABLE Courses(
    id CHAR(6) PRIMARY KEY,
    name VARCHAR(64)
);

CREATE TABLE Holes(
    number INT,
    par INT,
    courseId CHAR(6),
    PRIMARY KEY (number, par),
    CONSTRAINT fk_course FOREIGN KEY (courseId) REFERENCES Courses (id)
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
    courseId CHAR(6),
    holeNumber INT,
    holePar INT,
    played DATE,
    FOREIGN KEY (courseId) REFERENCES Courses (id),
    FOREIGN KEY (holeNumber, holePar) REFERENCES Holes (number, par)
);

INSERT INTO Courses (id, name) VALUES ('V-001', 'Hlíðarendavöllur');

INSERT INTO Holes (number, par, courseId)
VALUES (1, 5, 'V-001'), (2, 4, 'V-001'), (3, 3, 'V-001'), (4, 4, 'V-001'), (5, 4, 'V-001'), 
       (6, 3, 'V-001'), (7, 4, 'V-001'), (8, 5, 'V-001'), (9, 4, 'V-001'), (10, 5, 'V-001'), 
       (11, 4, 'V-001'), (12, 3, 'V-001'), (13, 4, 'V-001'), (14, 4, 'V-001'), (15, 3, 'V-001'), 
       (16, 4, 'V-001'), (17, 5, 'V-001'), (18, 4, 'V-001');
