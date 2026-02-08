import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({
   children,
   className,
   header,
   footer,
   onClick,
   hoverable = false,
   noPadding = false
}) => {
   return (
      <div
         className={clsx(
            'card',
            hoverable && 'cursor-pointer hover:scale-[1.02]',
            className
         )}
         onClick={onClick}
      >
         {header && (
            <div className="card-header">
               {header}
            </div>
         )}
         <div className={clsx('card-body', noPadding && 'p-0')}>
            {children}
         </div>
         {footer && (
            <div className="card-footer">
               {footer}
            </div>
         )}
      </div>
   );
};

Card.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   header: PropTypes.node,
   footer: PropTypes.node,
   onClick: PropTypes.func,
   hoverable: PropTypes.bool,
   noPadding: PropTypes.bool
};

export default Card;
