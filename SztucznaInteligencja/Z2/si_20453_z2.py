# -*- coding: utf-8 -*-
"""SI_20453_Z2.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1SkW2sTVv6gbwiIajcjPooKIZvGD1M-Dd
"""

import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
print(tf.__version__)

training_data = np.load('TF_dataset.npz')
input_size = 2
output_size = 1
np.savez('TF_dataset.npz',  inputs=training_data['inputs'], targets=training_data['targets'])

model = tf.keras.Sequential([
    tf.keras.layers.Dense(5, activation='sigmoid'),
    tf.keras.layers.Dense(5, activation='sigmoid'),
    tf.keras.layers.Dense(output_size)
])
model.compile(optimizer='lion', loss='mean_absolute_error')
model.fit(training_data['inputs'], training_data['targets'], epochs=100, verbose=1)

model.layers[0].get_weights()

plt.plot(np.squeeze(model.predict(training_data['inputs'])), np.squeeze(training_data['targets']),color='orange')
plt.xlabel('outputs')
plt.ylabel('targets')
plt.show()