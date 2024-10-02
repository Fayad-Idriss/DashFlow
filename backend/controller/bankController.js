
// Simuler un solde bancaire
const getBankBalance = (req, res) => {
    // Tu peux remplacer ces données par un appel à une vraie API si nécessaire plus tard
    const balance = {
      account: "1234567890",
      balance: 1500.25,
      currency: "EUR"
    };
  
    res.json(balance); // Renvoie le solde sous forme d'objet JSON
  };
  
  module.exports = {
    getBankBalance
  };