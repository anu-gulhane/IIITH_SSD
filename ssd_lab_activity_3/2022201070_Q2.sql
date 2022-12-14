SELECT CONCAT(EMPLOYEE.FNAME,' ',EMPLOYEE.LNAME) AS FULL_NAME, EMPLOYEE.SSN,T.NO_OF_EMP FROM EMPLOYEE JOIN (SELECT SUPER_SSN, COUNT(*) AS NO_OF_EMP 
FROM EMPLOYEE GROUP BY SUPER_SSN HAVING SUPER_SSN IS NOT NULL) AS T ON EMPLOYEE.SSN=T.SUPER_SSN ORDER BY NO_OF_EMP;
