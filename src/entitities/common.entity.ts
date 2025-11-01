import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { nullable } from 'zod';

interface IAmenities {
  name: string;
  desc: string;
}

@Entity('common')
export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text', nullable: true, array: true })
  notes: string[];

  @Column({ type: 'json' })
  account: {
    account_number: number;
    account_name: string;
    bank: string;
  };

  @Column({ type: 'json', nullable: true })
  restrictions: {
    checkout_policy: string;
    smoking_policy: string;
  };
  @Column({ type: 'json', nullable: true })
  penalties: {
    smoking_penalty: string;
    checkout_penalty: string;
  };
  @Column({ type: 'json', nullable: true })
  fees: {
    breakfast: number;
  };
  @Column({ type: 'json', nullable: true })
  hall: {
    amount: number;
  };

  @Column({ type: 'json', nullable: true })
  amenities: IAmenities[];
}

// {

//   "room_rates": {

//     "Hall": {
//       "rate": 350000
//     }
//   },
//   "amenities": {
//     "power_supply": "24hrs power supply",
//     "wifi": "Free Wifi Connection",
//     "facilities": [
//       "Pool bar",
//       "Executive bar",
//       "Restaurant"
//     ],
//     "late_checkout_policy": "All late checkout attract 50% additional charge"
// },
// "restrictions": {
//       "checkout_time": "12pm",
//     "smoking_policy": "All rooms are non-smoking rooms.",
//     "smoking_penalty": "Anyone caught smoking in the room attracts a penalty of ₦50,000."
//   },
//   "payment_details": {
//     "account_name": "MIRA HEIGHT SUITES HOTEL",
//     "account_number": "5089338984",
//     "bank": "Moniepoint"
//   },
// }

//   "contact": {
//     "phone_numbers": [
//       "08146443297",
//       "09019578269"
//     ]
//   }
