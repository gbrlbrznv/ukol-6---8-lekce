/* Catering
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to
Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
Flavour Haven: Dodává drahé jídlo z kvalitních surovin
Napište pro každou z těcho společností funkci s jedním parametrem, 
který udává, pro kolik lidí se catering objednává. Funkce pak vrátí 
řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. 
Například:
Catering od Flavour Haven pro 100 lidí za 300000 Kč.
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje 
vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet 
lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu
ve smyslu:
Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč. */

const just_food(catering_size):
    cena = catering_size * 50  #Cenazaosobu
    return "Catering od Just Food pro {catering_size} lidí za {price} Kč."

const your_mama(catering_size):
    cena = catering_size * 100  #Cenazaosobu
    return "Catering od Your Mama pro {catering_size} lidí za {price} Kč."

const flavour_haven(catering_size):
    cena = catering_size * 3000  # Cenazaosobu
    return "Catering od Flavour Haven pro {catering_size} lidí za {price} Kč."


const createEvent(event_name, catering_size, catering_function):
    catering_info = catering_function(catering_size)
    return "Událost {event_name} s {catering_info}"


event_name = "Inaugurace prezidenta"
catering_size = 100
catering_function = flavour_haven
    
event_description = createEvent(event_name, catering_size, catering_function)
print(event_description)