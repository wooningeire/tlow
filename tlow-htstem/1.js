function r1(cards) {
    const ranks = {};
    for (let [rank, suit] of cards) ranks[rank] = (ranks[rank] || 0) + 1;
    let tripleFulfilled = false;
    for (let amount of Object.values(ranks).sort((a, b) => b - a)) {
        if (amount >= 2 && tripleFulfilled) return true;
        if (amount >= 3) tripleFulfilled = true;
    }
    return false;
}