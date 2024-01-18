class Chest {
    constructor(id, posX, posY, name) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.chestName = name;
        this.hX = 0;
        this.hY = 0;

    }
}

class ChestsHandler {
    constructor() {
        // Use a Set for faster membership tests
        this.chestsSet = new Set();
    }

    addChest(id, posX, posY, name) {
        // Use a stringified tuple as a unique identifier for chests
        const chestString = `${id},${posX},${posY},${name}`;
        if (!this.chestsSet.has(chestString)) {
            this.chestsSet.add(chestString);
        }
    }

    removeChest(id) {
        // Use Set methods for faster removal
        this.chestsSet = new Set([...this.chestsSet].filter(chest => chest.split(',')[0] !== id.toString()));
    }

     addChestEvent(parameters) {
        const [chestId, chestsPosition, , chestName, altName] = parameters;
       // Simplify condition for mist check
        if (chestName.toLowerCase().includes("mist")) {
            this.addChest(chestId, chestsPosition[0], chestsPosition[1], altName);
        } else {
            this.addChest(chestId, chestsPosition[0], chestsPosition[1], chestName);
        }
    }
}
