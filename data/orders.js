export let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveOrderToStorage();
};

export function saveOrderToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders))
}

export function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if(order.id === orderId) {
      matchingOrder = order;
    }
  });
  return matchingOrder;
}