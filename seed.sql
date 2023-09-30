insert into author(ID_author, author_name, birth, death)
    values (1, 'Benjamin Franklin',1706,1790),
    (2,'Abraham Lincoln',1809,1865),
    (3,'William Shakespeare',1564,1616);

insert into proverb(ID_proverb,proverb_text,proverb_year,author_ID)
    values (1, 'Early to bed and early to rise, makes a man healthy, wealthy, and wise.',1732,1),
    (2,'Actions speak louder than words.',1856,2),
    (3,'To be or not to be, that is the question.',1600,3),
    (4,'All that glitters is not gold.',1596,3),
    (5,'A penny saved is a penny earned.',1732,1);

insert into address_table(ID_address,road_num,road_name,postal_code,city)
    values(1,8,'Santa Comba',92606,'Irvine'),
    (2,108,'Avenue de Paris',94800,'Villejuif'),
    (3,5,'Boulevard des habissois souverains',97119,'Vieux-Habitants');

insert into user_table(ID_user,user_name,address_ID,favourite_proverb)
    values(1,'Rem9007',2,3),
    (2,'Piks',1,1),
    (3,'Rynko',3,5);