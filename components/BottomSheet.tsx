import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useMemo } from 'react';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export type BottomSheetType = BottomSheetModal | null;

const BottomSheet = forwardRef<BottomSheetType>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);

  const { dismiss } = useBottomSheetModal();

  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      backgroundStyle={{ backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      backdropComponent={renderBackDrop}
      ref={ref}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleActiveText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.toggleInactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your Location</Text>
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    // marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  subheader: { fontSize: 16, fontWeight: '600', margin: 16 },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  toggleActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  toggleInactiveText: {
    // fontWeight: '700',
    color: Colors.primary,
  },
  toggleInactive: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.medium,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default BottomSheet;
