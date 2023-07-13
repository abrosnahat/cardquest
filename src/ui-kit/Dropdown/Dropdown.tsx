import cn from 'classnames';
import React, { useEffect } from 'react';
import { useOutsideClickRef } from 'rooks';
import styles from './Dropdown.module.scss';
import ArrowIcon from './img/arrow.svg';
import { useToggler } from '../../hooks/useToggler';
import { MenuItem } from '../MenuItem/MenuItem';

interface DropdownProps {
  children: React.ReactNode;
  items: {
    id: string;
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    isNav?: boolean;
    innerClassName?: string;
  }[];
  direction?: 'top' | 'bottom';
  className?: string;
  listClassName?: string;
  hideFirstDivider?: boolean;
  withArrow?: boolean;
  withPanel?: boolean;
  onToggle?: (curState: boolean) => void;
  clickOutsideWhen?: boolean;
  defaultIsOpen?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  items,
  direction = 'bottom',
  className,
  listClassName,
  hideFirstDivider,
  withArrow = true,
  withPanel = true,
  onToggle,
  defaultIsOpen = false,
  clickOutsideWhen = true,
}) => {
  const { toggle, isOpen } = useToggler(defaultIsOpen);

  const handleToggle = (curState: boolean = !isOpen) => {
    onToggle?.(curState);
    toggle(curState);
  };

  const [rootRef] = useOutsideClickRef(
    () => handleToggle(false),
    isOpen && clickOutsideWhen
  );

  useEffect(() => {
    toggle(defaultIsOpen);
  }, [defaultIsOpen]);

  return (
    <div
      ref={rootRef}
      onClick={() => handleToggle()}
      className={cn(
        styles.root,
        isOpen && styles.isOpen,
        withPanel && styles.panel,
        styles[direction],
        className
      )}
    >
      <div className={cn(styles.inner)}>
        {children}
        {withArrow && (
          <img
            src={ArrowIcon}
            className={cn(styles.icon, isOpen && styles.isOpen)}
          />
        )}
      </div>

      {isOpen && (
        <ul
          className={cn(
            styles.list,
            withPanel && styles.panel,
            listClassName,
            styles[direction]
          )}
        >
          {items.map(
            ({
              id,
              label,
              onClick,
              icon,
              href,
              isActive,
              isNav,
              innerClassName,
            }) => (
              <MenuItem
                nav={isNav}
                key={id}
                isActive={isActive}
                innerClassName={cn(
                  styles.item,
                  innerClassName,
                  withPanel && styles.panel,
                  (href || onClick) && styles.interactive,
                  styles[direction]
                )}
                activeInnerClassName={cn(styles.activeItem)}
                className={cn(
                  styles.itemWrapper,
                  hideFirstDivider && styles.hideFirstDivider
                )}
                onClick={onClick}
                href={href}
              >
                {icon}
                {typeof label === 'string' ? (
                  <span className={cn(styles.label)}>{label}</span>
                ) : (
                  label
                )}
              </MenuItem>
            )
          )}
        </ul>
      )}
    </div>
  );
};
