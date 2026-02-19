import { Polar } from '@polar-sh/sdk';

const isSandbox = import.meta.env.VITE_POLAR_SANDBOX === 'true';

const polar = new Polar({
  accessToken: isSandbox
    ? import.meta.env.VITE_POLAR_SANDBOX_ACCESS_TOKEN
    : import.meta.env.VITE_POLAR_ACCESS_TOKEN,
  ...(isSandbox && { server: 'sandbox' }),
});

export const PRODUCT_IDS = {
  single: isSandbox
    ? import.meta.env.VITE_POLAR_SANDBOX_PRODUCT_SINGLE
    : import.meta.env.VITE_POLAR_PRODUCT_SINGLE,
};

// ── createCheckout ───────────────────────────────────────────────────────────
export async function createCheckout(productId) {
  if (!productId) {
    throw new Error('Product ID is not configured. Check your .env file.');
  }

  const successUrl = `${window.location.origin}/result?checkout_id={CHECKOUT_ID}`;

  const checkout = await polar.checkouts.create({
    products: [productId],
    successUrl,
  });

  window.location.href = checkout.url;
}

// ── verifyCheckout ────────────────────────────────────────────────────────────
export async function verifyCheckout(checkoutId) {
  const checkout = await polar.checkouts.get({ id: checkoutId });
  return checkout.status === 'succeeded';
}
