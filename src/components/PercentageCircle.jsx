// import 'rc-progress/assets/index.css';
import { Circle } from 'rc-progress';

// eslint-disable-next-line react/prop-types
export default function PercentageCircle ({value}){
  const circleContainerStyle = {
    width: '60px',
    height: '60px',

  };
  return (
    <div>
    <div style={circleContainerStyle} className='relative'>
        <h3 className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>{value}%</h3>
        <Circle
          percent={value}
          strokeWidth="8"
          strokeLinecap="round"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        />
      </div>
      
      
    </div>
  );
}