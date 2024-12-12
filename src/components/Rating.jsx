import React from 'react';
import { connectRatingMenu } from 'instantsearch.js/es/connectors';
import { useConnector } from 'react-instantsearch';

export function Ratings({ attribute }) {
  const { refine, items } = useConnector(connectRatingMenu, { attribute });

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.value}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              cursor: 'pointer',
              opacity: item.count === 0 ? 0.5 : 1,
            }}
            onClick={() => refine(item.value)}
          >
            {/* Render stars */}
            {item.stars.map((isStarFull, index) => (
              <span
                key={index}
                style={{
                  color: isStarFull ? '#ffc107' : '#e4e5e9', // Gold for filled, gray for empty
                  fontSize: '16px', // Set consistent size
                  marginRight: '2px',
                }}
              >
                ★
              </span>
            ))}
            {/* Render count */}
            <span style={{ marginLeft: '10px', color: '#666' }}>
              ({item.count})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
