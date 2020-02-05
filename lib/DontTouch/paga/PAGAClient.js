function PAGAClient() {
  if (typeof this.startTransaction !== 'function') {
    throw new Error('Must implement "startTransaction"');
  }

  if (typeof this.stopTransaction !== 'function') {
    throw new Error('Must implement "stopTransaction"');
  }

  if (typeof this.setCreditCardInfo !== 'function') {
    throw new Error('Must implement "setCreditCardInfo"');
  }

  if (typeof this.hasCreditFor !== 'function') {
    throw new Error('Must implement "hasCreditFor"');
  }


  if (typeof this.charge !== 'function') {
    throw new Error('Must implement "charge"');
  }
}

module.exports = PAGAClient;
