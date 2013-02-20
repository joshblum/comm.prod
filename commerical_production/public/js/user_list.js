var user_list = ['Joshua Blum', 'ajlerch', 'Alison McKenzie', 'Andie Howell', 'arup', 'Aviana Polsky', 'bhogan', 'Colin Sidoti', 'Kelsey Brigance', 'Brooks Reed', 'Aaron Burrow', 'Calvin French-Owen', 'cameronf', 'Camille DeJarnett', 'Chris Post', 'chazlin', 'Chyleigh Harmon', 'Chelsea Lyons', 'cmorley', 'Megan Cox', 'Charlotte Kirk', 'daniella', 'dannyh46', 'Dario G-D', 'Denis Bozic', 'ddersh', 'Forrest Diamond', 'David Wise', 'dneal', 'Debra Slutsky', 'David Stringfellow', 'dario  Yazdi', 'emma feshbach', 'Emily Obert', 'gconley', 'Grant Jordan', 'hardingm', 'hardison', 'hsi', 'Henry Skupniewicz', 'hummel', 'Ian Rust', 'iggy', 'Ilya Volodarsky', 'j_c', 'Jacob Bower', 'Jaron Colas', 'Jaime Reyes', 'John DiMino', 'Jonathan Surick', 'James Torres', 'Max Kanter', 'Kristen Wilhite', 'Karen Dubbin', 'Kelly Clonts', 'kimrein', 'krakauer', 'kvogt', 'Luke Johnson', 'lholland', 'liffrig', 'lkoblan', 'Lena Ziskin', 'Matt Gildner', 'Melina Tsitsiklis', 'merolish', 'Matt Luchette', 'millern', 'Monica Pate', 'nayden', 'Nolan Eastin', 'Nikki Neibloom', 'nickncf', 'njensen', 'Neha Patki', 'paigef', 'patsmad', 'petech', 'Darthur Petron', 'pkrein', 'proctor', 'Rishi Dixit', 'reyda', 'Leigh Rojeski', 'Sam Duffley', 'seferry', 'shirink', 'smike', 'smirz', 'sobel', 'ssunanda', 'supertim', 'Stephanie Wang', 'Sylvan Tsai', 'syverud', 'Tom Brown', 'tribbett', 'tsaxtonf', 'victor jakubiuk', 'yiou', 'zakubenn', 'Zachary Brooks', 'brian.syverud', 'conansaunders', 'Devin Dersh', 'Allie Jacobs', 'jamsmad', 'Justin Nelson', 'Aaron Blankstein', 'kempsonk', 'kimschwing22', 'konane', 'Megan Firko', 'nnasserghodsi', 'rachel.lee', 'Tim Dudley', 'Bonny Kellermann', 'erwade', 'gallup', 'mdf', 'migfer', 'nickle', 'rajini', 'tawanda', 'tsylla', 'zcahn', 'Darragh Buckley', 'DanBloom', 'Gordon', 'Nutbrain', 'alarice', 'alkesner.96', 'allanl', 'Rosanna Alegado', 'audreys', 'BEVERLY deSouza', 'bgentala', 'castor', 'Chiangkai Er', 'chevray.keiko', 'Pierre Chevray', 'davet', 'dkbdan', 'enwang', 'gaiainc', 'gargi', 'georgia', 'ghaff', 'holmesjc', 'jack_little', 'jmvidal', 'jonathan', 'James Pinkney', 'jramos', 'jsarkar', 'katyo', 'kenneth.kempson', 'keri', 'ko', 'Lebzylisbeth Gonzalez', 'leven', 'Lucy Tancredi', 'manowitz', 'melissa', 'mfeldman', 'muayyad', 'nazario', 'nhernandez', 'rajeevd', 'Jerry Rau', 'rhh', 'ricci', 'rrubenst', 'Rene Parra', 'setlur', 'shalabi', 'Steven Kleiman', 'sstrauss', 'storm', 'Valerie Horne (Delmar)', 'whs', 'zala', 'charles.y.lin@gmail.com', 'kelclonts@gmail.com', 'azsommer@mit.edu', 'meekerl@mit.edu', 'm_chan@mit.edu', 'rishiltms@gmail.com', 'alm13@mit.edu', 'alisonleighmckenzie@gmail.com', 'kyleavogt@gmail.com', 'erensila@mit.edu', 'boss@tooboss.com', 'chigga88@mit.edu', 'dannyhernandez@gmail.com', 'dmneal@gmail.com', 'cathy.melnikow@gmail.com', 'patsmad@gmail.com', 'psaracog@gmail.com', 'jsmadbec@princeton.edu', 'jmcannon@mit.edu', 'not.tim.dudley@gmail.com', '7733431285@vtext.com', 'helz@alum.mit.edu', 'juliaj@mit.edu', 'Marguerite Siboni', 'anneshen@mit.edu', 'kota715@mit.edu', 'jovonne1001@aol.com', 'melina@mit.edu', 'melina.tsitsiklis@gmail.com', 'geconley@gmail.com', 'tribbettz@gmail.com', 'kotamit14@gmail.com', 'paige@finkelstein.us', 'wjjohn@mit.edu', 'nobodycares333@yahoo.com', '8126061202@mms.att.net', 'cknapp16@mit.edu', 'sunanda.sharma.92@gmail.com', 'chelsea.lyons@gmail.com', 'reinpk@gmail.com', 'justinmathew@gmail.com', 'tsaxtonf@gmail.com', 'ilya@segment.io', 'smirzoeff@gmail.com', 'ptgodart@gmail.com', 'kdubbs@stanford.edu', 'vireliz@mit.edu', 'mosley@mit.edu', 'fishie@mit.edu', 'liv_kim@mit.edu', 'thenick3@gmail.com', 'ahslocum@mit.edu', 'helz@mit.edu', 'mchu827@mit.edu', 'jmackay@mit.edu', 'samweiss@mit.edu', 'vsharris@mit.edu', 'pmoran@mit.edu', 'hardison@alum.mit.edu', 'mfirko@mit.edu', 'ilab-reg@mit.edu', 'konane@mit.edu', 'jamsmad@mit.edu', 'tombrown@mit.edu', 'audreys@mit.edu', 'aliciap@mit.edu', 'zpcahn@gmail.com', 'mbright@mit.edu', 'kmcennis@mit.edu', 'grienne@mit.edu', 'connick@mit.edu', 'harelw@mit.edu', 'crazelli@mit.edu', 'kenneth.kempson@ge.com', 'mcs354@yahoo.com', 'thepenis@mit.edu', 'dspelke@mit.edu', 'kevin@kevconstruction.com', 'audrey@gwu.edu', 'polar086@gmail.com', 'grinich@mit.edu', 'mcennis@jhu.edu', 'ianr@mit.edu', 'darragh@mit.edu', 'msiboni@mit.edu', 'mbennie@mit.edu', 'blanks@mit.edu', 'ddenis@mit.edu', 'amas@mit.edu', 'service@youtube.com', 'brooksr@mbari.org', 'petron@apple.com', 'helz06@gmail.com', 'navinen@mit.edu', 'mgrinich@gmail.com', 'kmcennis@polysci.umass.edu', 'dpiemont@mit.edu', '4153412285@vtext.com', 'vireliz@gmail.com', 'roccop@mit.edu', 'proctorl@usa.redcross.org', 'kmcennis@gmail.com', 'aura6852@mit.edu', 'cjfroehlich47@gmail.com', 'peter.reinhardt.08@gmail.com', 'ionbro@gmail.com', 'laura.proctor@mathworks.com', 'cpmosley@semesteratsea.net', 'colleenmosley@gmail.com', 'natana@mit.edu', 'rob.a.hummel@gmail.com', 'Peter Godart', 'alopez1108@gmail.com', 'jinder1s@mit.edu', 'vmstiv@mit.edu', 'emnaemna@gmail.com', 'Aaron Zwiebach', 'Anthony Mark', 'Bennett Cyphers', 'blanks', 'Berk Ozturk', 'Christopher Knapp', 'Emma Christie', 'jinder1s', 'Katrina Hui', 'msiboni', 'tombrown', 'Victoria Stivanello', 's.noelle.leu@gmail.com', 'commericalproduction', 'not.tim.dudley', 'bennettcyphers@gmail.com']
var user_dict ={'thepenis@mit.edu': 'thepenis@mit.edu', 'Tom Brown': 'nottombrown', 'samweiss@mit.edu': 'samweiss@mit.edu', 'charles.y.lin@gmail.com': 'charles.y.lin@gmail.com', 'John DiMino': 'jrdimino', 'dpiemont@mit.edu': 'dpiemont@mit.edu', 'tsaxtonf': 'tsaxtonf', 'hardingm': 'hardingm', 'zcahn': 'zcahn', 'Aaron Zwiebach': 'aaronz', 'Darragh Buckley': 'darragh', 'Debra Slutsky': 'dslu', 'tombrown': 'tombrown', 'yiou': 'yiou', 'cameronf': 'cameronf', 'justinmathew@gmail.com': 'justinmathew@gmail.com', 'sunanda.sharma.92@gmail.com': 'sunanda.sharma.92@gmail.com', 'emma feshbach': 'eef', 'peter.reinhardt.08@gmail.com': 'peter.reinhardt.08@gmail.com', 'msiboni': 'msiboni', 'setlur': 'setlur', 'jinder1s@mit.edu': 'jinder1s@mit.edu', 'Sam Duffley': 'sduffley', 'juliaj@mit.edu': 'juliaj@mit.edu', 'Leigh Rojeski': 'rojeski', 'chevray.keiko': 'chevray.keiko', 'tsaxtonf@gmail.com': 'tsaxtonf@gmail.com', 'vireliz@mit.edu': 'vireliz@mit.edu', 'mbennie@mit.edu': 'mbennie@mit.edu', 'emnaemna@gmail.com': 'emnaemna@gmail.com', 'Chelsea Lyons': 'cklyons', 'Darthur Petron': 'petron', 'Andie Howell': 'andiejh', 'gallup': 'gallup', 'dneal': 'dneal', 'melina.tsitsiklis@gmail.com': 'melina.tsitsiklis@gmail.com', 'mosley@mit.edu': 'mosley@mit.edu', 'Melina Tsitsiklis': 'melinat', 'holmesjc': 'holmesjc', 'alm13@mit.edu': 'alm13@mit.edu', 'ilab-reg@mit.edu': 'ilab-reg@mit.edu', 'bgentala': 'bgentala', 'navinen@mit.edu': 'navinen@mit.edu', 'storm': 'storm', 'Max Kanter': 'kanter', 'erensila@mit.edu': 'erensila@mit.edu', 'helz06@gmail.com': 'helz06@gmail.com', 'j_c': 'j_c', 'grienne@mit.edu': 'grienne@mit.edu', 'brooksr@mbari.org': 'brooksr@mbari.org', 'connick@mit.edu': 'connick@mit.edu', 'jsarkar': 'jsarkar', 'Pierre Chevray': 'chevray.pierre', 'chigga88@mit.edu': 'chigga88@mit.edu', 'audrey@gwu.edu': 'audrey@gwu.edu', 'liv_kim@mit.edu': 'liv_kim@mit.edu', 'lholland': 'lholland', 'Aviana Polsky': 'avianap', 'patsmad@gmail.com': 'patsmad@gmail.com', 'smike': 'smike', 'ajlerch': 'ajlerch', 'blanks@mit.edu': 'blanks@mit.edu', 'Kelsey Brigance': 'brigance', 'mchu827@mit.edu': 'mchu827@mit.edu', 'Bonny Kellermann': 'bonnyk', 'vmstiv@mit.edu': 'vmstiv@mit.edu', 'cknapp16@mit.edu': 'cknapp16@mit.edu', 'manowitz': 'manowitz', 'Kelly Clonts': 'kelonts', 'not.tim.dudley@gmail.com': 'not.tim.dudley@gmail.com', 'Stephanie Wang': 'swang93', 'Jonathan Surick': 'jsurick', 'msiboni@mit.edu': 'msiboni@mit.edu', 'jamsmad': 'jamsmad', 'geconley@gmail.com': 'geconley@gmail.com', 'proctor': 'proctor', 'Jaime Reyes': 'jmreyes', 'Brooks Reed': 'brooksr8', 'not.tim.dudley': 'not.tim.dudley', 'Chris Post': 'ccpost', 'dkbdan': 'dkbdan', '8126061202@mms.att.net': '8126061202@mms.att.net', 'allanl': 'allanl', 'rhh': 'rhh', 'Aaron Burrow': 'burrows', 'davet': 'davet', 'kimrein': 'kimrein', 'Calvin French-Owen': 'calvinfo', 'tombrown@mit.edu': 'tombrown@mit.edu', 'm_chan@mit.edu': 'm_chan@mit.edu', 'kevin@kevconstruction.com': 'kevin@kevconstruction.com', 'kvogt': 'kvogt', 'leven': 'leven', 'keri': 'keri', 'bhogan': 'bhogan', 'Monica Pate': 'mpate', 'Denis Bozic': 'dbozic', 'David Stringfellow': 'dstring', 'Victoria Stivanello': 'vmstiv', 'Nikki Neibloom': 'neibloom', 'alarice': 'alarice', 'colleenmosley@gmail.com': 'colleenmosley@gmail.com', 'daniella': 'daniella', 'roccop@mit.edu': 'roccop@mit.edu', 'mdf': 'mdf', 'rrubenst': 'rrubenst', 'ahslocum@mit.edu': 'ahslocum@mit.edu', 'ssunanda': 'ssunanda', 'liffrig': 'liffrig', 'tribbettz@gmail.com': 'tribbettz@gmail.com', 'fishie@mit.edu': 'fishie@mit.edu', 'ko': 'ko', 'ilya@segment.io': 'ilya@segment.io', 'gconley': 'gconley', 'cjfroehlich47@gmail.com': 'cjfroehlich47@gmail.com', 'jramos': 'jramos', 'muayyad': 'muayyad', 'vsharris@mit.edu': 'vsharris@mit.edu', 'Karen Dubbin': 'kdubbs', 'pkrein': 'pkrein', 'reyda': 'reyda', 'kyleavogt@gmail.com': 'kyleavogt@gmail.com', 'jinder1s': 'jinder1s', 'Lebzylisbeth Gonzalez': 'lebzy', 'patsmad': 'patsmad', 'cmorley': 'cmorley', 'nickncf': 'nickncf', 'mfirko@mit.edu': 'mfirko@mit.edu', 'psaracog@gmail.com': 'psaracog@gmail.com', 'arup': 'arup', 'nayden': 'nayden', 'Berk Ozturk': 'bozturk', 'Alison McKenzie': 'aliemck', 'ddersh': 'ddersh', 'njensen': 'njensen', 'jmackay@mit.edu': 'jmackay@mit.edu', 'ddenis@mit.edu': 'ddenis@mit.edu', 'georgia': 'georgia', 'jovonne1001@aol.com': 'jovonne1001@aol.com', 'Kristen Wilhite': 'kdionne', 'azsommer@mit.edu': 'azsommer@mit.edu', 'alopez1108@gmail.com': 'alopez1108@gmail.com', 'Grant Jordan': 'gjordan', 'smirz': 'smirz', 'Lucy Tancredi': 'lucy_tancredi', 'nhernandez': 'nhernandez', 'hardison@alum.mit.edu': 'hardison@alum.mit.edu', 'nnasserghodsi': 'nnasserghodsi', 'jonathan': 'jonathan', 'sobel': 'sobel', 'harelw@mit.edu': 'harelw@mit.edu', 'reinpk@gmail.com': 'reinpk@gmail.com', 'kota715@mit.edu': 'kota715@mit.edu', 'ptgodart@gmail.com': 'ptgodart@gmail.com', 'whs': 'whs', 'victor jakubiuk': 'victorj', 'petech': 'petech', 'kempsonk': 'kempsonk', 'thenick3@gmail.com': 'thenick3@gmail.com', 'James Pinkney': 'jpinkney2112', 'laura.proctor@mathworks.com': 'laura.proctor@mathworks.com', 'Henry Skupniewicz': 'hskup', 'rachel.lee': 'rachel.lee', 'crazelli@mit.edu': 'crazelli@mit.edu', 'ghaff': 'ghaff', 'Chyleigh Harmon': 'chyleigh', 'dannyh46': 'dannyh46', 'blanks': 'blanks', 'conansaunders': 'conansaunders', 'paige@finkelstein.us': 'paige@finkelstein.us', 'aliciap@mit.edu': 'aliciap@mit.edu', 'Colin Sidoti': 'boss', 'Allie Jacobs': 'jacobs.allie', 'chazlin': 'chazlin', '7733431285@vtext.com': '7733431285@vtext.com', 'helz@mit.edu': 'helz@mit.edu', 'Bennett Cyphers': 'bcyphers', 'dspelke@mit.edu': 'dspelke@mit.edu', 'Chiangkai Er': 'changkai', 'Jacob Bower': 'jbbower', 'mbright@mit.edu': 'mbright@mit.edu', 'kmcennis@gmail.com': 'kmcennis@gmail.com', 'konane': 'konane', 'Emily Obert': 'emobert', 'proctorl@usa.redcross.org': 'proctorl@usa.redcross.org', 'castor': 'castor', 'brian.syverud': 'brian.syverud', 'Valerie Horne (Delmar)': 'vadelmar', 'BEVERLY deSouza': 'bev', 'smirzoeff@gmail.com': 'smirzoeff@gmail.com', 'bennettcyphers@gmail.com': 'bennettcyphers@gmail.com', 'Megan Cox': 'coxmea', 'cpmosley@semesteratsea.net': 'cpmosley@semesteratsea.net', 'supertim': 'supertim', 'kelclonts@gmail.com': 'kelclonts@gmail.com', 'zakubenn': 'zakubenn', 'katyo': 'katyo', 'alisonleighmckenzie@gmail.com': 'alisonleighmckenzie@gmail.com', 'nazario': 'nazario', 'audreys': 'audreys', 'dmneal@gmail.com': 'dmneal@gmail.com', 'lkoblan': 'lkoblan', 'Gordon': 'Gordon', 'paigef': 'paigef', 'Tim Dudley': 'tdudley', 'Rene Parra': 'rxparra', 'gargi': 'gargi', 'darragh@mit.edu': 'darragh@mit.edu', 'Christopher Knapp': 'cknapp16', 'erwade': 'erwade', 'Emma Christie': 'emchris7', 'Joshua Blum': 'joshblum', 'hardison': 'hardison', 'rajeevd': 'rajeevd', 'zala': 'zala', 'Lena Ziskin': 'lmziskin', 'DanBloom': 'DanBloom', 'ricci': 'ricci', 'Sylvan Tsai': 'sylvant', 'Nutbrain': 'Nutbrain', 'polar086@gmail.com': 'polar086@gmail.com', 'krakauer': 'krakauer', 'Peter Godart': 'ptgodart', 'kenneth.kempson@ge.com': 'kenneth.kempson@ge.com', 'commericalproduction': 'commericalproduction', 'petron@apple.com': 'petron@apple.com', 'nickle': 'nickle', 'alkesner.96': 'alkesner.96', 'mgrinich@gmail.com': 'mgrinich@gmail.com', 'millern': 'millern', 'Aaron Blankstein': 'kantai', 'migfer': 'migfer', 'tsylla': 'tsylla', 'natana@mit.edu': 'natana@mit.edu', 'aura6852@mit.edu': 'aura6852@mit.edu', 'nobodycares333@yahoo.com': 'nobodycares333@yahoo.com', 'seferry': 'seferry', '4153412285@vtext.com': '4153412285@vtext.com', 'sstrauss': 'sstrauss', 'Steven Kleiman': 'srk', 'konane@mit.edu': 'konane@mit.edu', 'grinich@mit.edu': 'grinich@mit.edu', 'dario  Yazdi': 'dxyazdi', 'Jaron Colas': 'jcolas', 'syverud': 'syverud', 'Marguerite Siboni': 'margueritesiboni@gmail.com', 'Devin Dersh': 'dcdersh', 's.noelle.leu@gmail.com': 's.noelle.leu@gmail.com', 'zpcahn@gmail.com': 'zpcahn@gmail.com', 'kimschwing22': 'kimschwing22', 'ionbro@gmail.com': 'ionbro@gmail.com', 'hsi': 'hsi', 'amas@mit.edu': 'amas@mit.edu', 'jmcannon@mit.edu': 'jmcannon@mit.edu', 'Neha Patki': 'npatki', 'rishiltms@gmail.com': 'rishiltms@gmail.com', 'Dario G-D': 'dariogd', 'kdubbs@stanford.edu': 'kdubbs@stanford.edu', 'vireliz@gmail.com': 'vireliz@gmail.com', 'rajini': 'rajini', 'gaiainc': 'gaiainc', 'Rosanna Alegado': 'anolani', 'mcennis@jhu.edu': 'mcennis@jhu.edu', 'Ian Rust': 'icrust', 'kotamit14@gmail.com': 'kotamit14@gmail.com', 'helz@alum.mit.edu': 'helz@alum.mit.edu', 'jmvidal': 'jmvidal', 'merolish': 'merolish', 'Ilya Volodarsky': 'ivolo', 'Nolan Eastin': 'neastin', 'Zachary Brooks': 'zlbrooks', 'Jerry Rau': 'rau', 'Matt Gildner': 'mattgmit', 'mfeldman': 'mfeldman', 'shalabi': 'shalabi', 'kmcennis@mit.edu': 'kmcennis@mit.edu', 'tribbett': 'tribbett', 'wjjohn@mit.edu': 'wjjohn@mit.edu', 'Katrina Hui': 'klhui', 'meekerl@mit.edu': 'meekerl@mit.edu', 'hummel': 'hummel', 'kenneth.kempson': 'kenneth.kempson', 'jack_little': 'jack_little', 'Forrest Diamond': 'diamondf', 'boss@tooboss.com': 'boss@tooboss.com', 'anneshen@mit.edu': 'anneshen@mit.edu', 'jamsmad@mit.edu': 'jamsmad@mit.edu', 'Camille DeJarnett': 'camilled', 'dannyhernandez@gmail.com': 'dannyhernandez@gmail.com', 'rob.a.hummel@gmail.com': 'rob.a.hummel@gmail.com', 'ianr@mit.edu': 'ianr@mit.edu', 'audreys@mit.edu': 'audreys@mit.edu', 'shirink': 'shirink', 'kmcennis@polysci.umass.edu': 'kmcennis@polysci.umass.edu', 'melissa': 'melissa', 'mcs354@yahoo.com': 'mcs354@yahoo.com', 'enwang': 'enwang', 'chelsea.lyons@gmail.com': 'chelsea.lyons@gmail.com', 'Luke Johnson': 'lbj16', 'Justin Nelson': 'jmnelson', 'melina@mit.edu': 'melina@mit.edu', 'Charlotte Kirk': 'cskirk', 'David Wise': 'djwise', 'Rishi Dixit': 'rdixit', 'jsmadbec@princeton.edu': 'jsmadbec@princeton.edu', 'Megan Firko': 'mfirko', 'cathy.melnikow@gmail.com': 'cathy.melnikow@gmail.com', 'Matt Luchette': 'mfluchet', 'service@youtube.com': 'service@youtube.com', 'James Torres': 'jtorres9', 'tawanda': 'tawanda', 'iggy': 'iggy', 'Anthony Mark': 'amark819', 'pmoran@mit.edu': 'pmoran@mit.edu'}