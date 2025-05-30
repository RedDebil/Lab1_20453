# -*- coding: utf-8 -*-
"""SI_20453_Z3.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1N5jDzjrhdbZ0BJXizWdwfAxZ127dtPKU

Autor: Filip Kłos 20453
"""

import numpy as np
import tensorflow as tf
import cv2
import matplotlib.pyplot as plt
import tensorflow_datasets as tfds

mnist_dataset, mnist_info = tfds.load(name='mnist', with_info=True, as_supervised=True)
mnist_train, mnist_test = mnist_dataset['train'], mnist_dataset['test']
num_validation_samples = 0.1 * mnist_info.splits['train'].num_examples
num_validation_samples = tf.cast(num_validation_samples, tf.int64)
num_test_samples = mnist_info.splits['test'].num_examples
num_test_samples = tf.cast(num_test_samples, tf.int64)

def scale(image, label):
    image = tf.cast(image, tf.float32)
    image /= 255.
    return image, label

scaled_train_and_validation_data = mnist_train.map(scale)
test_data = mnist_test.map(scale)

BUFFER_SIZE = 1000
shuffled_train_and_validation_data = scaled_train_and_validation_data.shuffle(BUFFER_SIZE)
validation_data = shuffled_train_and_validation_data.take(num_validation_samples)

train_data = shuffled_train_and_validation_data.skip(num_validation_samples)

BATCH_SIZE = 100
train_data = train_data.batch(BATCH_SIZE)
validation_data = validation_data.batch(num_validation_samples)
test_data = test_data.batch(num_test_samples)
validation_inputs, validation_targets = next(iter(validation_data))
print(validation_inputs.shape, validation_targets.shape)

input_size = 784
output_size = 10

hidden_layer_size = 50

model = tf.keras.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28, 1)),
    tf.keras.layers.Dense(hidden_layer_size, activation='relu'),
    tf.keras.layers.Dense(hidden_layer_size, activation='relu'),
    tf.keras.layers.Dense(output_size, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

NUM_EPOCHS = 30

early_stopping = tf.keras.callbacks.EarlyStopping(patience=2)

model.fit(train_data, epochs=NUM_EPOCHS, callbacks=[early_stopping], validation_data=(validation_inputs, validation_targets), verbose=1)

test_loss, test_accuracy = model.evaluate(test_data)
print('Test loss: {0:.2f}. Test accuracy: {1:.2f}%'.format(test_loss, test_accuracy*100.))

from google.colab import drive
drive.mount('/content/drive')
sciezka_pliku = '/content/drive/MyDrive/Colab Notebooks/Cztery.png'

image = cv2.imread(sciezka_pliku, cv2.IMREAD_GRAYSCALE)

plt.imshow(image, cmap='gray')
plt.title('Wczytany obrazek')
plt.axis('off')
plt.show()

image_resized = cv2.resize(image, (28, 28))

image_inverted = 255 - image_resized

image_normalized = image_inverted / 255.0

image_reshaped = np.reshape(image_normalized, (1, 28, 28, 1))

predictions = model.predict(image_reshaped)

predicted_digit = np.argmax(predictions)

print("Przewidywana cyfra:", predicted_digit)