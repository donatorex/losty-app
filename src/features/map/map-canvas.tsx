import { Camera, Map } from '@maplibre/maplibre-react-native';
import type { ViewStateChangeEvent } from '@maplibre/maplibre-react-native';
import { useCallback, useState } from 'react';
import type { NativeSyntheticEvent } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import {
  ALMATY_CENTER,
  ALMATY_MAX_BOUNDS,
  ALMATY_ZOOM,
  getMapStyleUrl,
  hasMapTilerKey,
} from './config';
import { colors, spacing, typography } from '@/theme/tokens';

type Status = 'loading' | 'ready' | 'error';

type MapCanvasProps = {
  onFrame?: () => void;
  onRegionChange?: (zoom: number) => void;
};

export function MapCanvas({ onFrame, onRegionChange }: MapCanvasProps) {
  const [status, setStatus] = useState<Status>('loading');

  const handleRegionChange = useCallback(
    (event: NativeSyntheticEvent<ViewStateChangeEvent>) => {
      onRegionChange?.(event.nativeEvent.zoom);
    },
    [onRegionChange],
  );

  if (!hasMapTilerKey()) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.text}>Нет ключа MapTiler</Text>
          <Text style={styles.mutedText}>
            Добавь EXPO_PUBLIC_MAPTILER_KEY в .env и перезапусти dev-сервер.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Map
        style={styles.map}
        mapStyle={getMapStyleUrl()}
        attribution
        logo={false}
        compass
        tintColor={colors.text}
        onDidFinishLoadingMap={() => setStatus('ready')}
        onDidFailLoadingMap={() => setStatus('error')}
        onDidFinishRenderingFrame={onFrame}
        onRegionDidChange={handleRegionChange}
      >
        <Camera
          initialViewState={{ center: ALMATY_CENTER, zoom: ALMATY_ZOOM }}
          maxBounds={ALMATY_MAX_BOUNDS}
          minZoom={9}
          maxZoom={18}
        />
      </Map>

      {status === 'loading' ? (
        <View pointerEvents="none" style={styles.center}>
          <Text style={styles.text}>Загружаем карту Алматы…</Text>
        </View>
      ) : null}

      {status === 'error' ? (
        <View style={styles.center}>
          <Text style={styles.text}>
            Не удалось загрузить стиль. Проверь ключ MapTiler и интернет.
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  map: {
    flex: 1,
  },
  center: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  text: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
  },
  mutedText: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
