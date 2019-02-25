/* select p.title from users u */
/* join posts p */
/* on u.id = p.author_id */
/* where u.id = $1 */
/* and p.title like $3 */

/* select * from users u */
/* join posts p */
/* on u.id = p.author_id */
/*       AND CASE WHEN false */
/*             THEN  u.id = 5 */
/*             ELSE  u.id = 5 */
/*        END */

SELECT * FROM users u
JOIN posts p
ON u.id = p.author_id AND 
(
   ( true OR u.id = 5 )
 )


