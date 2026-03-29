import { useEffect } from 'react';
import { Slot, useRouter } from 'expo-router';

export default function RootLayout() {
  const router = useRouter();

  // TODO: Replace with actual auth check
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth/signIn/gmailOauth');
    }
  }, [isAuthenticated]);

  return <Slot />;
}
