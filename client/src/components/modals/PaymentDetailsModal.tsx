// @ts-nocheck
import React from 'react';
import { X, CreditCard, Download, Receipt, Calendar, Building2, User, Trash2 } from 'lucide-react';
import Button from '../Button';

interface PaymentDetailsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onDelete?: () => void;
  payment?: any;
  paymentMethod?: any;
}

export default function PaymentDetailsModal({ isOpen = true, onClose, onDelete, payment, paymentMethod }: PaymentDetailsModalProps) {
  const source = payment || paymentMethod || {};
  const safePayment = {
    ...source,
    cardNumber: String(source.cardNumber || source.lastFour || ''),
    cardholderName: source.cardholderName || source.name || 'Saved payment method',
    expiryDate: source.expiryDate || (source.expiryMonth && source.expiryYear ? `${source.expiryMonth}/${source.expiryYear}` : 'Not provided'),
    billingAddress: {
      street: source.billingAddress?.street || 'Not provided',
      city: source.billingAddress?.city || '',
      state: source.billingAddress?.state || '',
      country: source.billingAddress?.country || 'Not provided',
      postalCode: source.billingAddress?.postalCode || '',
    },
    createdAt: source.createdAt || new Date().toISOString(),
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Method Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Card Information */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Card ending in {safePayment.cardNumber.slice(-4)}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cardholder Name</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {safePayment.cardholderName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expiry Date</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {safePayment.expiryDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Billing Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {safePayment.billingAddress.street}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {safePayment.billingAddress.city}, {safePayment.billingAddress.state}{' '}
                      {safePayment.billingAddress.postalCode}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Receipt className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {safePayment.billingAddress.country}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      Added on {new Date(safePayment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t dark:border-gray-700">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              type="button"
              variant="danger"
              icon={() => <Trash2 className="h-4 w-4" />}
              onClick={onDelete || onClose}
            >
              Delete Payment Method
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}