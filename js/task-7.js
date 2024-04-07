// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

// Кожна транзакція - це об'єкт із властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //історія транзакцій
  transactions: [],

  // Метод створює та повертає об'єкт транзакцій
  // Приймає суму та тип транзакції

  createTransaction(type, amount) {
    return {
      type,
      amount,
    }
  },

  // Метод відповідає за додавання суми до балансу.
  // Приймає суму транзакції
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій

  deposit(amount) {
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount)
    this.transactions.push(transaction)
    this.balance += amount;
  },

  // Метод відповідає за зняття суми з балансу.
  // Приймає суму тразакцій.
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій
  // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

  withdraw(amount) {
    if (amount > this.balance) {
      return alert("Unvailable amount")
    }
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount)
    this.transactions.push(transaction)
    this.balance -= amount;
  },

  // Метод, що повертає поточний баланс
  getBalance() {
    return this.balance
  },

  // Метод шукає та повертає об'єкта транзакції по id
  getTransactionDetails(id) {
    return this.transactions[id];
  },

  // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
  getTransactionType(type) {
    let sum = 0;
    for (const item of this.transactions) {
      if (type === item.type) {
        sum += item.amount;
      }
    }
    return sum;
  },
}


account.deposit(300);
account.deposit(800);
account.deposit(200);
account.withdraw(400);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.transactions);
console.log(account.getTransactionType(Transaction.DEPOSIT));