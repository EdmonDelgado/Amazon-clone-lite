import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { isWeekend } from '../script/utils/dates.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
},{
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option
    }
  });

  return deliveryOption || deliveryOptions[0];
};

export function calculateDeliveryDate(deliveryOption) {
  let deliveryDate = dayjs();
  let daysRemaining = deliveryOption.deliveryDays;

  while(daysRemaining > 0) {
    deliveryDate = deliveryDate.add(1, 'day');
    
    /*
    if (!isWeekend(deliveryDate)){
      daysRemaining--;
    }
    */

    daysRemaining--;

    // issue encountered with backend, when posting an order it does not send the delivery 
    // info along with it, resulting in the expected delivery time being different
    // in the orders page than the one in the order summary, more specifically it doesn't
    // skip weekends.
  };

  const dateString = deliveryDate.format('dddd, MMMM D');

  return dateString 
};