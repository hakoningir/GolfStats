INSERT INTO Courses (id, name) VALUES ('V-001', 'Hlíðarendavöllur'), ('V-002', 'Háagerðisvöllur');

INSERT INTO Holes (number, par, courseId)
VALUES (1, 5, 'V-001'), (2, 4, 'V-001'), (3, 3, 'V-001'), (4, 4, 'V-001'), (5, 4, 'V-001'), 
       (6, 3, 'V-001'), (7, 4, 'V-001'), (8, 5, 'V-001'), (9, 4, 'V-001'), (10, 5, 'V-001'), 
       (11, 4, 'V-001'), (12, 3, 'V-001'), (13, 4, 'V-001'), (14, 4, 'V-001'), (15, 3, 'V-001'), 
       (16, 4, 'V-001'), (17, 5, 'V-001'), (18, 4, 'V-001'),
       (1, 3, 'V-002'), (2, 5, 'V-002'), (3, 4, 'V-002'), (4, 4, 'V-002'), (5, 5, 'V-002'), 
       (6, 4, 'V-002'), (7, 3, 'V-002'), (8, 4, 'V-002'), (9, 4, 'V-002'), (10, 3, 'V-002'), 
       (11, 5, 'V-002'), (12, 4, 'V-002'), (13, 4, 'V-002'), (14, 5, 'V-002'), 
       (15, 4, 'V-002'), (16, 3, 'V-002'), (17, 4, 'V-002'), (18, 4, 'V-002');

-- INSERT INTO Rounds (courseId, played, userId)
-- VALUES ('V-001', '2023-04-16', 1);

-- INSERT INTO Statistics (score, putts, hitFairway, hitGreen, upAndDown, bunker, sandSave, inside100, holeNumber, courseId, roundId)
-- VALUES (4, 2, 'Yes', 'Yes', TRUE, FALSE, TRUE, 1, 1, 'V-001', 1);
