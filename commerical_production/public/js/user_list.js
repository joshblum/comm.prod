var user_list = ['Joshua Blum', 'ajlerch', 'Alison McKenzie', 'andiejh', 'arup', 'Aviana Polsky', 'bhogan', 'Colin Sidoti', 'Kelsey Brigance', 'Brooks Reed', 'Aaron Burrow', 'Calvin French-Owen', 'cameronf', 'Camille DeJarnett', 'Chris Post', 'chazlin', 'Chyleigh Harmon', 'Chelsea Lyons', 'cmorley', 'Megan Cox', 'Charlotte Kirk', 'daniella', 'dannyh46', 'Dario G-D', 'Denis Bozic', 'ddersh', 'Forrest Diamond', 'djwise', 'dneal', 'Debra Slutsky', 'David Stringfellow', 'dario  Yazdi', 'emma feshbach', 'Emily Obert', 'gconley', 'Grant Jordan', 'hardingm', 'hardison', 'hsi', 'Henry Skupniewicz', 'hummel', 'Ian Rust', 'iggy', 'Ilya Volodarsky', 'j_c', 'Jacob Bower', 'Jaron Colas', 'Jaime Reyes', 'John DiMino', 'Jonathan Surick', 'James Torres', 'Max Kanter', 'Kristen Wilhite', 'Karen Dubbin', 'Kelly Clonts', 'kimrein', 'krakauer', 'kvogt', 'Luke Johnson', 'lholland', 'liffrig', 'lkoblan', 'Lena Ziskin', 'Matt Gildner', 'Melina Tsitsiklis', 'merolish', 'Matt Luchette', 'millern', 'Monica Pate', 'nayden', 'Nolan Eastin', 'Nikki Neibloom', 'nickncf', 'njensen', 'Neha Patki', 'paigef', 'patsmad', 'petech', 'Darthur Petron', 'pkrein', 'proctor', 'Rishi Dixit', 'reyda', 'Leigh Rojeski', 'Sam Duffley', 'seferry', 'shirink', 'smike', 'smirz', 'sobel', 'ssunanda', 'supertim', 'Stephanie Wang', 'Sylvan Tsai', 'syverud', 'Tom Brown', 'tribbett', 'tsaxtonf', 'victorj', 'yiou', 'zakubenn', 'Zachary Brooks', 'brian.syverud', 'conansaunders', 'Devin Dersh', 'Allie Jacobs', 'jamsmad', 'Justin Nelson', 'Aaron Blankstein', 'kempsonk', 'kimschwing22', 'konane', 'Megan Firko', 'nnasserghodsi', 'rachel.lee', 'Tim Dudley', 'Bonny Kellermann', 'erwade', 'gallup', 'mdf', 'migfer', 'nickle', 'rajini', 'tawanda', 'tsylla', 'zcahn', 'Darragh Buckley', 'DanBloom', 'Gordon', 'Nutbrain', 'alarice', 'alkesner.96', 'allanl', 'Rosanna Alegado', 'audreys', 'BEVERLY deSouza', 'bgentala', 'castor', 'Chiangkai Er', 'chevray.keiko', 'Pierre Chevray', 'davet', 'dkbdan', 'enwang', 'gaiainc', 'gargi', 'georgia', 'ghaff', 'holmesjc', 'jack_little', 'jmvidal', 'jonathan', 'James Pinkney', 'jramos', 'jsarkar', 'katyo', 'kenneth.kempson', 'keri', 'ko', 'Lebzylisbeth Gonzalez', 'leven', 'Lucy Tancredi', 'manowitz', 'melissa', 'mfeldman', 'muayyad', 'nazario', 'nhernandez', 'rajeevd', 'Jerry Rau', 'rhh', 'ricci', 'rrubenst', 'Rene Parra', 'setlur', 'shalabi', 'Steven Kleiman', 'sstrauss', 'storm', 'Valerie Horne (Delmar)', 'whs', 'zala', 'charles.y.lin@gmail.com', 'kelclonts@gmail.com', 'azsommer@mit.edu', 'meekerl@mit.edu', 'm_chan@mit.edu', 'rishiltms@gmail.com', 'alm13@mit.edu', 'alisonleighmckenzie@gmail.com', 'kyleavogt@gmail.com', 'erensila@mit.edu', 'boss@tooboss.com', 'chigga88@mit.edu', 'dannyhernandez@gmail.com', 'dmneal@gmail.com', 'cathy.melnikow@gmail.com', 'patsmad@gmail.com', 'psaracog@gmail.com', 'vireliz@mit.edu', 'jsmadbec@princeton.edu', 'jmcannon@mit.edu', 'not.tim.dudley@gmail.com', '7733431285@vtext.com', 'helz@alum.mit.edu', 'juliaj@mit.edu', 'Marguerite Siboni', 'anneshen@mit.edu', 'kota715@mit.edu', 'jovonne1001@aol.com', 'melina@mit.edu', 'melina.tsitsiklis@gmail.com', 'geconley@gmail.com', 'tribbettz@gmail.com', 'kotamit14@gmail.com', 'paige@finkelstein.us', 'wjjohn@mit.edu', 'nobodycares333@yahoo.com', '8126061202@mms.att.net', 'sunanda.sharma.92@gmail.com', 'chelsea.lyons@gmail.com', 'reinpk@gmail.com', 'justinmathew@gmail.com', 'tsaxtonf@gmail.com', 'ilya@segment.io', 'smirzoeff@gmail.com', 'mosley@mit.edu', 'ptgodart@gmail.com', 'kdubbs@stanford.edu', 'fishie@mit.edu', 'liv_kim@mit.edu', 'thenick3@gmail.com', 'ahslocum@mit.edu', 'helz@mit.edu', 'mchu827@mit.edu', 'jmackay@mit.edu', 'samweiss@mit.edu', 'vsharris@mit.edu', 'pmoran@mit.edu', 'hardison@alum.mit.edu', 'mfirko@mit.edu', 'ilab-reg@mit.edu', 'konane@mit.edu', 'jamsmad@mit.edu', 'tombrown@mit.edu', 'audreys@mit.edu', 'aliciap@mit.edu', 'zpcahn@gmail.com', 'mbright@mit.edu', 'kmcennis@mit.edu', 'grienne@mit.edu', 'connick@mit.edu', 'harelw@mit.edu', 'crazelli@mit.edu', 'kenneth.kempson@ge.com', 'mcs354@yahoo.com', 'thepenis@mit.edu', 'dspelke@mit.edu', 'kevin@kevconstruction.com', 'audrey@gwu.edu', 'polar086@gmail.com', 'grinich@mit.edu', 'mcennis@jhu.edu', 'ianr@mit.edu', 'darragh@mit.edu', 'msiboni@mit.edu', 'mbennie@mit.edu', 'blanks@mit.edu', 'ddenis@mit.edu', 'amas@mit.edu', 'service@youtube.com', 'brooksr@mbari.org', 'petron@apple.com', 'helz06@gmail.com', 'navinen@mit.edu', 'mgrinich@gmail.com', 'kmcennis@polysci.umass.edu', 'dpiemont@mit.edu', '4153412285@vtext.com', 'vireliz@gmail.com', 'roccop@mit.edu', 'proctorl@usa.redcross.org', 'kmcennis@gmail.com', 'aura6852@mit.edu', 'cjfroehlich47@gmail.com', 'peter.reinhardt.08@gmail.com', 'ionbro@gmail.com', 'laura.proctor@mathworks.com', 'cpmosley@semesteratsea.net', 'colleenmosley@gmail.com', 'natana@mit.edu', 'rob.a.hummel@gmail.com', 'cknapp16@mit.edu']
var user_dict ={'Neha Patki': 'npatki', 'Dario G-D': 'dariogd', 'connick@mit.edu': 'connick@mit.edu', 'Alison McKenzie': 'aliemck', 'Melina Tsitsiklis': 'melinat', 'not.tim.dudley@gmail.com': 'not.tim.dudley@gmail.com', 'melina@mit.edu': 'melina@mit.edu', 'crazelli@mit.edu': 'crazelli@mit.edu', 'wjjohn@mit.edu': 'wjjohn@mit.edu', 'chevray.keiko': 'chevray.keiko', 'Rosanna Alegado': 'anolani', 'cpmosley@semesteratsea.net': 'cpmosley@semesteratsea.net', 'ionbro@gmail.com': 'ionbro@gmail.com', 'jsarkar': 'jsarkar', 'alarice': 'alarice', 'Pierre Chevray': 'chevray.pierre', 'fishie@mit.edu': 'fishie@mit.edu', 'Kelly Clonts': 'kelonts', 'mchu827@mit.edu': 'mchu827@mit.edu', 'tsaxtonf': 'tsaxtonf', 'njensen': 'njensen', 'ajlerch': 'ajlerch', 'Sylvan Tsai': 'sylvant', 'tribbett': 'tribbett', 'darragh@mit.edu': 'darragh@mit.edu', 'vireliz@mit.edu': 'vireliz@mit.edu', 'kmcennis@gmail.com': 'kmcennis@gmail.com', 'cjfroehlich47@gmail.com': 'cjfroehlich47@gmail.com', 'seferry': 'seferry', 'Lebzylisbeth Gonzalez': 'lebzy', 'dneal': 'dneal', 'rajeevd': 'rajeevd', 'ghaff': 'ghaff', 'paigef': 'paigef', 'Aviana Polsky': 'avianap', 'ricci': 'ricci', 'lkoblan': 'lkoblan', 'petron@apple.com': 'petron@apple.com', 'peter.reinhardt.08@gmail.com': 'peter.reinhardt.08@gmail.com', 'hummel': 'hummel', 'jovonne1001@aol.com': 'jovonne1001@aol.com', 'Rene Parra': 'rxparra', 'Ilya Volodarsky': 'ivolo', 'kempsonk': 'kempsonk', 'melina.tsitsiklis@gmail.com': 'melina.tsitsiklis@gmail.com', 'zala': 'zala', 'jonathan': 'jonathan', 'mdf': 'mdf', 'alkesner.96': 'alkesner.96', 'amas@mit.edu': 'amas@mit.edu', 'brian.syverud': 'brian.syverud', '8126061202@mms.att.net': '8126061202@mms.att.net', 'Henry Skupniewicz': 'hskup', 'liffrig': 'liffrig', 'kimrein': 'kimrein', 'reinpk@gmail.com': 'reinpk@gmail.com', 'djwise': 'djwise', 'Justin Nelson': 'jmnelson', 'aliciap@mit.edu': 'aliciap@mit.edu', 'konane@mit.edu': 'konane@mit.edu', 'geconley@gmail.com': 'geconley@gmail.com', 'daniella': 'daniella', 'meekerl@mit.edu': 'meekerl@mit.edu', 'Grant Jordan': 'gjordan', 'dkbdan': 'dkbdan', 'Darragh Buckley': 'darragh', 'Nolan Eastin': 'neastin', 'Brooks Reed': 'brooksr8', 'Megan Firko': 'mfirko', 'nickncf': 'nickncf', 'David Stringfellow': 'dstring', 'juliaj@mit.edu': 'juliaj@mit.edu', 'Chiangkai Er': 'changkai', 'dpiemont@mit.edu': 'dpiemont@mit.edu', 'iggy': 'iggy', 'Debra Slutsky': 'dslu', 'Matt Gildner': 'mattgmit', 'Stephanie Wang': 'swang93', 'holmesjc': 'holmesjc', 'Leigh Rojeski': 'rojeski', 'anneshen@mit.edu': 'anneshen@mit.edu', 'kimschwing22': 'kimschwing22', 'kvogt': 'kvogt', 'grinich@mit.edu': 'grinich@mit.edu', 'smirz': 'smirz', 'dmneal@gmail.com': 'dmneal@gmail.com', 'emma feshbach': 'eef', 'msiboni@mit.edu': 'msiboni@mit.edu', 'Ian Rust': 'icrust', 'Matt Luchette': 'mfluchet', 'smike': 'smike', 'davet': 'davet', 'georgia': 'georgia', 'Gordon': 'Gordon', 'Jerry Rau': 'rau', 'Devin Dersh': 'dcdersh', 'kevin@kevconstruction.com': 'kevin@kevconstruction.com', 'Kelsey Brigance': 'brigance', 'brooksr@mbari.org': 'brooksr@mbari.org', 'cameronf': 'cameronf', 'samweiss@mit.edu': 'samweiss@mit.edu', 'gallup': 'gallup', 'krakauer': 'krakauer', 'Jonathan Surick': 'jsurick', 'justinmathew@gmail.com': 'justinmathew@gmail.com', 'gaiainc': 'gaiainc', 'erensila@mit.edu': 'erensila@mit.edu', 'grienne@mit.edu': 'grienne@mit.edu', 'helz@mit.edu': 'helz@mit.edu', 'nnasserghodsi': 'nnasserghodsi', 'hardison@alum.mit.edu': 'hardison@alum.mit.edu', 'Nikki Neibloom': 'neibloom', 'jmvidal': 'jmvidal', 'sunanda.sharma.92@gmail.com': 'sunanda.sharma.92@gmail.com', 'cathy.melnikow@gmail.com': 'cathy.melnikow@gmail.com', 'helz06@gmail.com': 'helz06@gmail.com', 'Charlotte Kirk': 'cskirk', 'Nutbrain': 'Nutbrain', 'dannyh46': 'dannyh46', 'Megan Cox': 'coxmea', 'kdubbs@stanford.edu': 'kdubbs@stanford.edu', 'kelclonts@gmail.com': 'kelclonts@gmail.com', 'erwade': 'erwade', 'smirzoeff@gmail.com': 'smirzoeff@gmail.com', 'yiou': 'yiou', 'jsmadbec@princeton.edu': 'jsmadbec@princeton.edu', 'pmoran@mit.edu': 'pmoran@mit.edu', 'hardison': 'hardison', 'Calvin French-Owen': 'calvinfo', 'leven': 'leven', 'shirink': 'shirink', 'Sam Duffley': 'sduffley', 'laura.proctor@mathworks.com': 'laura.proctor@mathworks.com', 'ilya@segment.io': 'ilya@segment.io', 'Colin Sidoti': 'boss', 'migfer': 'migfer', 'paige@finkelstein.us': 'paige@finkelstein.us', 'polar086@gmail.com': 'polar086@gmail.com', 'ahslocum@mit.edu': 'ahslocum@mit.edu', 'allanl': 'allanl', 'Allie Jacobs': 'jacobs.allie', 'kota715@mit.edu': 'kota715@mit.edu', 'BEVERLY deSouza': 'bev', 'Monica Pate': 'mpate', 'j_c': 'j_c', 'vireliz@gmail.com': 'vireliz@gmail.com', 'ssunanda': 'ssunanda', 'DanBloom': 'DanBloom', '7733431285@vtext.com': '7733431285@vtext.com', 'kotamit14@gmail.com': 'kotamit14@gmail.com', 'shalabi': 'shalabi', 'jmcannon@mit.edu': 'jmcannon@mit.edu', 'natana@mit.edu': 'natana@mit.edu', 'audrey@gwu.edu': 'audrey@gwu.edu', 'nhernandez': 'nhernandez', 'rishiltms@gmail.com': 'rishiltms@gmail.com', 'kmcennis@polysci.umass.edu': 'kmcennis@polysci.umass.edu', 'Chyleigh Harmon': 'chyleigh', 'reyda': 'reyda', 'Lucy Tancredi': 'lucy_tancredi', 'zcahn': 'zcahn', 'sstrauss': 'sstrauss', 'mgrinich@gmail.com': 'mgrinich@gmail.com', 'aura6852@mit.edu': 'aura6852@mit.edu', 'alisonleighmckenzie@gmail.com': 'alisonleighmckenzie@gmail.com', 'kyleavogt@gmail.com': 'kyleavogt@gmail.com', 'azsommer@mit.edu': 'azsommer@mit.edu', 'kmcennis@mit.edu': 'kmcennis@mit.edu', 'tribbettz@gmail.com': 'tribbettz@gmail.com', 'tawanda': 'tawanda', 'jmackay@mit.edu': 'jmackay@mit.edu', 'Darthur Petron': 'petron', 'James Torres': 'jtorres9', 'rrubenst': 'rrubenst', 'Chelsea Lyons': 'cklyons', 'hsi': 'hsi', 'mfeldman': 'mfeldman', 'Tom Brown': 'nottombrown', 'rajini': 'rajini', 'thenick3@gmail.com': 'thenick3@gmail.com', 'rhh': 'rhh', 'melissa': 'melissa', 'sobel': 'sobel', 'konane': 'konane', 'zpcahn@gmail.com': 'zpcahn@gmail.com', 'castor': 'castor', 'nazario': 'nazario', 'charles.y.lin@gmail.com': 'charles.y.lin@gmail.com', 'Kristen Wilhite': 'kdionne', 'Joshua Blum': 'joshblum', 'setlur': 'setlur', 'millern': 'millern', 'John DiMino': 'jrdimino', 'psaracog@gmail.com': 'psaracog@gmail.com', 'gconley': 'gconley', 'nobodycares333@yahoo.com': 'nobodycares333@yahoo.com', 'jamsmad@mit.edu': 'jamsmad@mit.edu', 'mcennis@jhu.edu': 'mcennis@jhu.edu', 'nayden': 'nayden', 'Tim Dudley': 'tdudley', 'alm13@mit.edu': 'alm13@mit.edu', 'Aaron Burrow': 'burrows', 'keri': 'keri', 'lholland': 'lholland', 'Jaron Colas': 'jcolas', 'dannyhernandez@gmail.com': 'dannyhernandez@gmail.com', 'zakubenn': 'zakubenn', 'patsmad': 'patsmad', 'patsmad@gmail.com': 'patsmad@gmail.com', 'Bonny Kellermann': 'bonnyk', 'ilab-reg@mit.edu': 'ilab-reg@mit.edu', 'blanks@mit.edu': 'blanks@mit.edu', 'Camille DeJarnett': 'camilled', 'Aaron Blankstein': 'kantai', 'chelsea.lyons@gmail.com': 'chelsea.lyons@gmail.com', 'Karen Dubbin': 'kdubbs', 'boss@tooboss.com': 'boss@tooboss.com', 'ptgodart@gmail.com': 'ptgodart@gmail.com', 'mosley@mit.edu': 'mosley@mit.edu', 'navinen@mit.edu': 'navinen@mit.edu', 'arup': 'arup', 'supertim': 'supertim', 'rachel.lee': 'rachel.lee', 'liv_kim@mit.edu': 'liv_kim@mit.edu', 'dspelke@mit.edu': 'dspelke@mit.edu', 'Denis Bozic': 'dbozic', 'bhogan': 'bhogan', 'Marguerite Siboni': 'margueritesiboni@gmail.com', 'Rishi Dixit': 'rdixit', 'whs': 'whs', 'Lena Ziskin': 'lmziskin', 'roccop@mit.edu': 'roccop@mit.edu', 'gargi': 'gargi', 'chazlin': 'chazlin', 'jamsmad': 'jamsmad', 'merolish': 'merolish', 'manowitz': 'manowitz', 'Jaime Reyes': 'jmreyes', 'audreys@mit.edu': 'audreys@mit.edu', 'andiejh': 'andiejh', 'helz@alum.mit.edu': 'helz@alum.mit.edu', 'enwang': 'enwang', 'Forrest Diamond': 'diamondf', 'audreys': 'audreys', 'James Pinkney': 'jpinkney2112', 'petech': 'petech', 'Valerie Horne (Delmar)': 'vadelmar', 'Zachary Brooks': 'zlbrooks', 'mfirko@mit.edu': 'mfirko@mit.edu', '4153412285@vtext.com': '4153412285@vtext.com', 'Steven Kleiman': 'srk', 'kenneth.kempson@ge.com': 'kenneth.kempson@ge.com', 'mbright@mit.edu': 'mbright@mit.edu', 'storm': 'storm', 'service@youtube.com': 'service@youtube.com', 'tsylla': 'tsylla', 'ddenis@mit.edu': 'ddenis@mit.edu', 'vsharris@mit.edu': 'vsharris@mit.edu', 'katyo': 'katyo', 'Luke Johnson': 'lbj16', 'kenneth.kempson': 'kenneth.kempson', 'mcs354@yahoo.com': 'mcs354@yahoo.com', 'chigga88@mit.edu': 'chigga88@mit.edu', 'colleenmosley@gmail.com': 'colleenmosley@gmail.com', 'conansaunders': 'conansaunders', 'harelw@mit.edu': 'harelw@mit.edu', 'dario  Yazdi': 'dxyazdi', 'ko': 'ko', 'pkrein': 'pkrein', 'hardingm': 'hardingm', 'nickle': 'nickle', 'cknapp16@mit.edu': 'cknapp16@mit.edu', 'jack_little': 'jack_little', 'ddersh': 'ddersh', 'bgentala': 'bgentala', 'proctorl@usa.redcross.org': 'proctorl@usa.redcross.org', 'm_chan@mit.edu': 'm_chan@mit.edu', 'syverud': 'syverud', 'mbennie@mit.edu': 'mbennie@mit.edu', 'muayyad': 'muayyad', 'Jacob Bower': 'jbbower', 'ianr@mit.edu': 'ianr@mit.edu', 'rob.a.hummel@gmail.com': 'rob.a.hummel@gmail.com', 'proctor': 'proctor', 'victorj': 'victorj', 'Emily Obert': 'emobert', 'tsaxtonf@gmail.com': 'tsaxtonf@gmail.com', 'thepenis@mit.edu': 'thepenis@mit.edu', 'Chris Post': 'ccpost', 'jramos': 'jramos', 'cmorley': 'cmorley', 'Max Kanter': 'kanter', 'tombrown@mit.edu': 'tombrown@mit.edu'}