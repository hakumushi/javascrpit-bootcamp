let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return seatsLeft >= partySize
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restaurant.seatParty(73)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
