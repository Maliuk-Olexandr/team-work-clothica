'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useAuthStore } from '@/lib/store/authStore';
import Image from 'next/image';
import '@/app/globals.css';
import { useCartStore } from '@/lib/store/cartStore';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const { items } = useCartStore();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const links = [
    { href: '/', label: 'Головна' },
    { href: '/goods', label: 'Товари' },
    { href: '/categories', label: 'Категорії' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Clothica Logo"
            width={84}
            height={36}
            priority
            className={styles.logoIcon}
          />
        </Link>

        <nav className={styles.nav}>
          {links.map(link => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          {!isAuthenticated ? (
            <>
              <Link
                href="/auth/login"
                className={`btn btn-secondary ${styles.btnLogin}`}>
                Вхід
              </Link>
              <Link
                href="/auth/register"
                className={`btn btn-primary ${styles.btnRegister}`}>
                Реєстрація
              </Link>
            </>
          ) : (
            <Link href="/profile" className={styles.btnCabinet}>
              Кабінет
            </Link>
          )}
          <button
            className={`btn btn-circle ${styles.burgerBtn}`}
            aria-label="Відкрити меню"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {!isMobileMenuOpen ? (
              <svg width={24} height={24}>
                <use
                  href="/sprite.svg#menu"
                  className={styles.burgerIcon}></use>
              </svg>
            ) : (
              <svg width={24} height={24}>
                <use href="/sprite.svg#close" />
              </svg>
            )}
            
          </button>
            <Link
              href="/basket"
              className={`btn-round ${styles.cartLink}`}
              aria-label="Кошик">
              <svg className={styles.cartIcon} width={24} height={24}>
                <use href="/sprite.svg#shopping_cart"></use>
              </svg>
              <span className={styles.cartBadge}>{items.length}</span>
            </Link>
            
        </div>
      </div>
      <MobileMenu
        open={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogout={() => {
          if (isAuthenticated) logout();
          setMobileMenuOpen(false);
        }}
        links={links}
      />
    </header>
  );
};

export default Header;
